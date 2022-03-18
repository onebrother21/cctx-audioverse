import { Component } from '@angular/core';

@Component({
  selector: 'qs-user-account',
  templateUrl: './qs-user-account.component.html',
  styleUrls: ['./qs-user-account.component.scss'],
})
export class QS_UserAccountComponent {
  title = "qs-user-account";
  editAccount(){console.log("fields now open to edit");}
}
