import { Component } from '@angular/core';
import { NavItem, User } from '@state';
import { MeService } from '../me.service';

@Component({
  selector: 'qs-me-dash',
  templateUrl: './me-dash.component.html',
  styleUrls: ['./me-dash.component.scss'],
})
export class MeDashComponent {
  title = "me-dash";
  menu:NavItem[] = this.user.menu;
  me:Partial<User> = {};
  constructor(private user:MeService){
    this.user.me$.subscribe(me => this.me = me);
  }
  selectItem(item:NavItem){console.log(item);}
}
