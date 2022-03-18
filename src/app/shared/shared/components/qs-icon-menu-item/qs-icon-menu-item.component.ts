import { Component,Input,Output,EventEmitter } from '@angular/core';
import { QS_Icon } from '@qs-state';

@Component({
  selector: 'qs-icon-menu-item',
  templateUrl: './qs-icon-menu-item.component.html',
  styleUrls: ['./qs-icon-menu-item.component.scss'],
})

export class QS_IconMenuItemComponent {
  title = "qs-icon-menu-item";
  @Input() item:QS_Icon = {label:"",type:""};
  @Output() select:EventEmitter<any> = new EventEmitter();
}
