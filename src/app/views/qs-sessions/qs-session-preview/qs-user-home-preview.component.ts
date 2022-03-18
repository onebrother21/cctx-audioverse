import { Component,Input,Output,EventEmitter } from '@angular/core';
import { QS_SessionRoomPreview } from '@qs-state';



@Component({
  selector: 'qs-user-home-preview',
  templateUrl: './qs-user-home-preview.component.html',
  styleUrls: ['./qs-user-home-preview.component.scss'],
})
export class QS_UserHomePreviewComponent {
  title = "qs-user-home-preview";
  @Input() preview:QS_SessionRoomPreview = {
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
