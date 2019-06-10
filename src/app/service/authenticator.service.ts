import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user.model';
import {Md5} from 'ts-md5/dist/md5';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http'
import { FACELIST_API } from 'src/app/app.api';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  private currentUser: User

  constructor(private http:HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('u'))

    if(this.currentUser==null){
      this.guestUser()
    }
   }

  registrarPost(user:User):Observable<User>{
    user.password = Md5.hashStr(user.password).toString();
    return this.http.post<User>(`${FACELIST_API}/users`,user);
  }

  registrar(user:User){
    this.registrarPost(user).subscribe(
      data => {
        this.currentUser = data;
        localStorage.setItem('u',JSON.stringify(this.currentUser));
      }
    )
  }

  guestUser(){
    this.currentUser = {
      "id":0,
      "name":"Usuário Convidado",
      "email":"",
      "password":"",
      "type":""
    }
  }

  logout(){
    localStorage.removeItem('u');
    this.guestUser();
  }

  getCurrentUser():User{
    return this.currentUser;
  }

  isLogged(){
    if(localStorage.getItem('u')!=null){
      return true;
    }else{
      return false;
    }
  }

  isAdmin(){
    if(localStorage.getItem('u')!=null){
      if(this.currentUser.type==='admin'){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }

  private getUserByLogin(email:String):Observable<User>{
    return this.http.get<User>(`${FACELIST_API}/users?email=${email}`)
  }

  login(email:String, password:string){
       
    this.getUserByLogin(email).subscribe(
      data=>{
        //Verificar se veio conteúdo
        if(data){
          
          //Verificar se a senha é igual
          password = Md5.hashStr(password).toString();
          
          if(data[0].password===password){
            this.currentUser = data[0];
            localStorage.setItem('u',JSON.stringify(this.currentUser));
          }
        }
      }
    )
  }
}
