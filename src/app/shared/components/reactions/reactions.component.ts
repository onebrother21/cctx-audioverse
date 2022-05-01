import { Component,Output,EventEmitter } from '@angular/core';
import { AppNavItem } from '@state';

@Component({
  selector: 'qs-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.scss'],
})
export class ReactionsComponent {
  title = "reactions";
  @Output() react:EventEmitter<string> = new EventEmitter();
  //react(reaction:string){this.comments.send({user:'Jackswift',body:reaction});}
}
