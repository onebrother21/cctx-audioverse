import { Component,Output,EventEmitter } from '@angular/core';
import { QS_Icon } from '@qs-state';

@Component({
  selector: 'qs-reactions',
  templateUrl: './qs-reactions.component.html',
  styleUrls: ['./qs-reactions.component.scss'],
})
export class QS_ReactionsComponent {
  title = "qs-reactions";
  @Output() react:EventEmitter<string> = new EventEmitter();
  //react(reaction:string){this.comments.send({user:'Jackswift',body:reaction});}
}
