import { Component,Input,Output,EventEmitter } from '@angular/core';
import { QS_Ad } from '@qs-state';

@Component({
  selector: 'qs-blue-box',
  templateUrl: './qs-blue-box.component.html',
  styleUrls: ['./qs-blue-box.component.scss'],
})
export class QS_BlueBoxComponent {
  title = "qs-blue-box";
  @Input() bluebox:QS_Ad = {type:"ad",header:"",content:""};
  @Output() select:EventEmitter<any> = new EventEmitter();
}
