import { Component } from '@angular/core';
import { Icon } from '@qs-state';
import { ServicesService } from '../qs-services.service';

@Component({
  selector: 'qs-services-dash',
  templateUrl: './qs-services-dash.component.html',
  styleUrls: ['./qs-services-dash.component.scss'],
})
export class ServicesDashComponent {
  title = "qs-services-dash";
  menu:Icon[] = this.services.menu;
  constructor(private services:ServicesService){}
  selectItem(item:Icon){console.log(item);}
}
