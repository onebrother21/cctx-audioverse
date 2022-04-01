import { Component } from '@angular/core';
import { UserJson } from '@state';
import { AuthService } from '../auth.service';

@Component({
  selector: 'qs-auth-update-pin',
  templateUrl: './auth-update-pin.component.html',
  styleUrls: ['./auth-update-pin.component.scss'],
})
export class AuthUpdatePinComponent {
  title = "auth-update-pin";
  greeting = "Create A Pin";
  confirm:string = "";
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
    if(!this.confirm){this.confirm = pin;this.greeting = "Now Confirm Your Pin";}
    else if(this.confirm == pin) this.auth.send("updatePin",{
      pin,
      username:this.user?.username,
    });
    else return;
  }
}