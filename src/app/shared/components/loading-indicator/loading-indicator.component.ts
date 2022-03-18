import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector:"qs-loading-indicator",
  templateUrl: "./loading-indicator.component.html",
  styleUrls: ["./loading-indicator.component.scss"],
})

export class LoadingIndicatorComponent {
  title = "loading-indicator";
  @Input() loading:boolean = false;
  @Output() select:EventEmitter<any> = new EventEmitter();
}
