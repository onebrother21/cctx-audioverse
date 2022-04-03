import { Component,Input,Output,EventEmitter } from '@angular/core';
import { NavItem } from '@state';

@Component({
  selector: 'qs-icon-menu-item',
  templateUrl: './icon-menu-item.component.html',
  styleUrls: ['./icon-menu-item.component.scss'],
})

export class IconMenuItemComponent {
  title = "icon-menu-item";
  @Input() item:NavItem = {label:"",type:""};
  @Output() select:EventEmitter<any> = new EventEmitter();
}
