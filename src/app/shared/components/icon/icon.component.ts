import { Component,Input } from '@angular/core';
import { NavItem } from '@state';

@Component({
  selector: 'qs-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  title = "icon";
  @Input() item:NavItem = {type:"",label:"",class:""};
}
