import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Ad } from '@qs-state';

@Component({
  selector: 'qs-blue-box',
  templateUrl: './qs-blue-box.component.html',
  styleUrls: ['./qs-blue-box.component.scss'],
})
export class BlueBoxComponent {
  title = "qs-blue-box";
  @Input() bluebox:Ad = {type:"ad",header:"",content:""};
  @Output() select:EventEmitter<any> = new EventEmitter();
}
