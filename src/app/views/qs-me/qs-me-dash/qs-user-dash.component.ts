import { Component } from '@angular/core';
import { Icon } from '@qs-state';
import { UserService } from '../qs-user.service';

@Component({
  selector: 'qs-user-dash',
  templateUrl: './qs-user-dash.component.html',
  styleUrls: ['./qs-user-dash.component.scss'],
})
export class UserDashComponent {
  title = "qs-user-dash";
  menu:Icon[] = this.user.menu;
  constructor(private user:UserService){}
  selectItem(item:Icon){console.log(item);}
}
