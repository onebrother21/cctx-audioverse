import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Room } from '@state';



@Component({
  selector: 'qs-preview-room',
  templateUrl: './preview-room.component.html',
  styleUrls: ['./preview-room.component.scss'],
})
export class PreviewRoomComponent {
  title = "preview-room";
  @Input() preview:Room = {
    id:"00",
    name:"",
    img:"",
    vid:"",
    users:[],
    rank:0,
    duration:"",
    viewCt:0,
    commentCt:0,
    userCt:0,
    created:new Date(),
  };
  @Output() select:EventEmitter<any> = new EventEmitter();
  isLast = 1;
}
