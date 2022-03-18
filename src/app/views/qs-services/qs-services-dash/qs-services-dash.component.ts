import { Component } from '@angular/core';
import { QS_Icon } from '@qs-state';
import { QS_ServicesService } from '../qs-services.service';

@Component({
  selector: 'qs-services-dash',
  templateUrl: './qs-services-dash.component.html',
  styleUrls: ['./qs-services-dash.component.scss'],
})
export class QS_ServicesDashComponent {
  title = "qs-services-dash";
  menu:QS_Icon[] = this.services.menu;
  constructor(private services:QS_ServicesService){}
  selectItem(item:QS_Icon){console.log(item);}
}
