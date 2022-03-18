import { Component } from '@angular/core';
import { QS_AuthService } from '../qs-auth.service';

@Component({
  selector: 'qs-auth-login',
  templateUrl: './qs-auth-login.component.html',
  styleUrls: ['./qs-auth-login.component.scss'],
})
export class QS_AuthLoginComponent {
  title = "qs-auth-login";
  greeting = "Enter Your Pin";
  pinConfig = {
    minlength:4,
    maxlength:4,
    masked:true
  };
  loading:boolean = false;
  constructor(private auth:QS_AuthService){
    this.auth.loading.subscribe(loading => this.loading = loading);
  }
  submitPin(pin:string){this.auth.send({action:"login",pin});}
}