import { Component } from '@angular/core';
import { Icon } from '@state';
import { MeService } from '../me.service';

@Component({
  selector: 'qs-me-dash',
  templateUrl: './me-dash.component.html',
  styleUrls: ['./me-dash.component.scss'],
})
export class MeDashComponent {
  title = "me-dash";
  menu:Icon[] = this.user.menu;
  constructor(private user:MeService){}
  selectItem(item:Icon){console.log(item);}
}
