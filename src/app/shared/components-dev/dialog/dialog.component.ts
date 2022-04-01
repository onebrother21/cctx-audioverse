import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'qs-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  title = "dialog";
  @Input() alert:string = "";
  //@Output() select:EventEmitter<any> = new EventEmitter();
}
