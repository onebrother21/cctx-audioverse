import { Component } from '@angular/core';

@Component({
  selector: 'qs-me-acct',
  templateUrl: './me-acct.component.html',
  styleUrls: ['./me-acct.component.scss'],
})
export class MeAccountComponent {
  title = "me-account";
  editAccount(){console.log("fields now open to edit");}
}
