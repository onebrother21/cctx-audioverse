import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Room } from '@qs-state';



@Component({
  selector: 'qs-room-preview',
  templateUrl: './qs-room-preview.component.html',
  styleUrls: ['./qs-room-preview.component.scss'],
})
export class RoomPreviewComponent {
  title = "qs-room-preview";
  @Input() preview:Room = {
    id:"00",
    name:"",
    img:"",
    vid:"",
    members:[],
    rank:0,
    duration:"",
    viewCt:0,
    commentCt:0,
    userCt:0
  };
  @Output() select:EventEmitter<any> = new EventEmitter();
  isLast = 1;
}