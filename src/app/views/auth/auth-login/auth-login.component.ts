import { Component } from '@angular/core';
import { UserJson } from '@state';
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
  loading = false;
  isSubmitted = false;
  user?:UserJson;
  constructor(private auth:AuthService){
    this.auth.loading$.subscribe(loading => this.loading = loading);
    this.auth.me$.subscribe(user => this.user = user);
  }
  submitPin(pin:string){
    this.auth.send({
      action:"login",
      pin,
      username:this.user?.username,
    });
  }
}