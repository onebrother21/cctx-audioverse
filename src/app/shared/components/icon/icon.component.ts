import { Component,Input } from '@angular/core';
import { AppNavItem } from '@state';

@Component({
  selector: 'qs-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  title = "icon";
  @Input() item:AppNavItem = {type:"",label:"",class:""};
}
