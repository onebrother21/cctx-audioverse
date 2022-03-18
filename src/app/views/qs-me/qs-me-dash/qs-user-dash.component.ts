import { Component } from '@angular/core';
import { QS_Icon } from '@qs-state';
import { QS_UserService } from '../qs-user.service';

@Component({
  selector: 'qs-user-dash',
  templateUrl: './qs-user-dash.component.html',
  styleUrls: ['./qs-user-dash.component.scss'],
})
export class QS_UserDashComponent {
  title = "qs-user-dash";
  menu:QS_Icon[] = this.user.menu;
  constructor(private user:QS_UserService){}
  selectItem(item:QS_Icon){console.log(item);}
}
