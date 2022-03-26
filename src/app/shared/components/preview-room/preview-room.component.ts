import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Room } from '@state';



@Component({
  selector: 'qs-preview-room',
  templateUrl: './preview-room.component.html',
  styleUrls: ['./preview-room.component.scss'],
})
export class PreviewRoomComponent {
  title = "preview-room";
  @Input() preview?:Room;
  @Output() select:EventEmitter<any> = new EventEmitter();
  isLast = 1;
}
