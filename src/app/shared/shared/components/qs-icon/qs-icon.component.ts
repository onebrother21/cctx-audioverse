import { Component,Input } from '@angular/core';
import { QS_Icon } from '@qs-state';

@Component({
  selector: 'qs-icon',
  templateUrl: './qs-icon.component.html',
  styleUrls: ['./qs-icon.component.scss'],
})
export class QS_IconComponent {
  title = "qs-icon";
  @Input() item:QS_Icon = {type:"",label:"",class:""};
}
