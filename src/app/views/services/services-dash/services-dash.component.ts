import { Component } from '@angular/core';
import { AppNavItem } from '@state';
import { ServicesService } from '../services.service';

@Component({
  selector: 'qs-services-dash',
  templateUrl: './services-dash.component.html',
  styleUrls: ['./services-dash.component.scss'],
})
export class ServicesDashComponent {
  title = "services-dash";
  menu:AppNavItem[] = [];
  constructor(private services:ServicesService){
    this.services.content$.subscribe(content => content?this.menu = content.menus["servicesDash"]:null);
  }
  selectItem(item:AppNavItem){console.log(item);}
}
