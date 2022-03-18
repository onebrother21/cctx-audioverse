import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Ad } from '@state';

@Component({
  selector: 'qs-blue-box',
  templateUrl: './blue-box.component.html',
  styleUrls: ['./blue-box.component.scss'],
})
export class BlueBoxComponent {
  title = "blue-box";
  @Input() bluebox:Ad = {header:"",content:""};
  @Output() select:EventEmitter<any> = new EventEmitter();
}
