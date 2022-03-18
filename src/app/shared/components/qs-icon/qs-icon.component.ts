import { Component,Input } from '@angular/core';
import { Icon } from '@qs-state';

@Component({
  selector: 'qs-icon',
  templateUrl: './qs-icon.component.html',
  styleUrls: ['./qs-icon.component.scss'],
})
export class IconComponent {
  title = "qs-icon";
  @Input() item:Icon = {type:"",label:"",class:""};
}
