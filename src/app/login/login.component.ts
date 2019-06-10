import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticatorService } from 'src/app/service/authenticator.service';
import { User } from 'src/app/model/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private fb: FormBuilder, private authService:AuthenticatorService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submit(){
    
    this.authService.login(this.loginForm.controls.email.value,this.loginForm.controls.password.value);
  }

  ngOnInit() {
  }

}
