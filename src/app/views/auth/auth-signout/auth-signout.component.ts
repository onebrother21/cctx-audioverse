import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'qs-auth-signout',
  templateUrl: './auth-signout.component.html',
  styleUrls: ['./auth-signout.component.scss'],
})
export class AuthSignOutComponent {
  title = "auth-signout";
  constructor(private auth:AuthService){this.auth.send("signout",{});}
}
