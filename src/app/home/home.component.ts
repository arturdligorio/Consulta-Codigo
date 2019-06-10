import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cardInscritos = {
    total:0,
    descricao:"Inscritos"
  }

  cardContabeis = {
    total:0,
    descricao:"Ciências Contábeis"
  }

  cardAdministracao = {
    total:0,
    descricao:"Administração"
  }

  cardComputacao = {
    total:0,
    descricao:"Ciência da Computação"
  }

  constructor() { }

  ngOnInit() {
  }

  inscrever(){
    this.cardInscritos.total++;
  }

  matricularContabeis(){
    if(this.cardInscritos.total==0){
      alert("Não há alunos inscritos!");
    }else{
      this.cardInscritos.total--;
      this.cardContabeis.total++;
    }
  }

  matricularAdministracao(){
    if(this.cardInscritos.total==0){
      alert("Não há alunos inscritos!");
    }else{
      this.cardInscritos.total--;
      this.cardAdministracao.total++;
    }
  }

  matricularComputacao(){
    if(this.cardInscritos.total==0){
      alert("Não há alunos inscritos!");
    }else{
      this.cardInscritos.total--;
      this.cardComputacao.total++;
    }
  }

}
