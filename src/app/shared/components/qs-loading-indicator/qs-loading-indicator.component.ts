import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector:"qs-loading-indicator",
  templateUrl: "./qs-loading-indicator.component.html",
  styleUrls: ["./qs-loading-indicator.component.scss"],
})

export class LoadingIndicatorComponent {
  title = "qs-loading-indicator";
  @Input() loading:boolean = false;
  @Output() select:EventEmitter<any> = new EventEmitter();
}
