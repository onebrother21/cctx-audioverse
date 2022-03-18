import { Component } from '@angular/core';
import { Icon } from '@state';
import { UserService } from '../me.service';

@Component({
  selector: 'qs-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.scss'],
})
export class UserDashComponent {
  title = "user-dash";
  menu:Icon[] = this.user.menu;
  constructor(private user:UserService){}
  selectItem(item:Icon){console.log(item);}
}
