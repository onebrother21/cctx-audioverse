import { Component } from '@angular/core';
import { AppAlert, AppNavItem,UserJson } from '@state';
import { MeService } from '../me.service';

@Component({
  selector: 'qs-me-dash',
  templateUrl: './me-dash.component.html',
  styleUrls: ['./me-dash.component.scss'],
})
export class MeDashComponent {
  title = "me-dash";
  menu:AppNavItem[] = [];
  me:Partial<UserJson> = {};
  alert:AppAlert = {type:"success",name:"phnOrEmailReq"};
  constructor(private user:MeService){
    this.user.me$.subscribe(me => this.me = me);
    this.user.content$.subscribe(content => content?this.menu = content.menus["userDash"]:null);
  }
  selectItem(item:AppNavItem){console.log(item);}
}
