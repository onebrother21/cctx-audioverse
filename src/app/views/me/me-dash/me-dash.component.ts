import { Component } from '@angular/core';
import { Icon, User } from '@state';
import { MeService } from '../me.service';

@Component({
  selector: 'qs-me-dash',
  templateUrl: './me-dash.component.html',
  styleUrls: ['./me-dash.component.scss'],
})
export class MeDashComponent {
  title = "me-dash";
  menu:Icon[] = this.user.menu;
  me:Partial<User> = {};
  constructor(private user:MeService){
    this.user.me$.subscribe(me => this.me = me);
  }
  selectItem(item:Icon){console.log(item);}
}
