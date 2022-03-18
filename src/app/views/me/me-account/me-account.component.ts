import { Component } from '@angular/core';

@Component({
  selector: 'qs-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss'],
})
export class UserAccountComponent {
  title = "user-account";
  editAccount(){console.log("fields now open to edit");}
}
