import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'qs-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent {
  title = "auth-login";
  greeting = "Enter Your Pin";
  pinConfig = {
    minlength:4,
    maxlength:4,
    masked:true
  };
  loading:boolean = false;
  constructor(private auth:AuthService){
    this.auth.loading.subscribe(loading => this.loading = loading);
  }
  submitPin(pin:string){this.auth.send({action:"login",pin});}
}