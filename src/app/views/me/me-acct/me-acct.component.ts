import { Component } from '@angular/core';
import { UserJson } from '@state';
import { MeService } from '../me.service';

@Component({
  selector: 'qs-me-acct',
  templateUrl: './me-acct.component.html',
  styleUrls: ['./me-acct.component.scss'],
})
export class MeAccountComponent {
  title = "me-account";
  me:Partial<UserJson> = {};
  constructor(private user:MeService){
    this.user.me$.subscribe(me => this.me = me);
  }
  editAccount(){console.log("fields now open to edit");}
}
