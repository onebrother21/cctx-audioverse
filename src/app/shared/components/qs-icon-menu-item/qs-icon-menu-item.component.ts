import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Icon } from '@qs-state';

@Component({
  selector: 'qs-icon-menu-item',
  templateUrl: './qs-icon-menu-item.component.html',
  styleUrls: ['./qs-icon-menu-item.component.scss'],
})

export class IconMenuItemComponent {
  title = "qs-icon-menu-item";
  @Input() item:Icon = {label:"",type:""};
  @Output() select:EventEmitter<any> = new EventEmitter();
}
