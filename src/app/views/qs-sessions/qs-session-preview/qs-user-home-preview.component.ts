import { Component,Input,Output,EventEmitter } from '@angular/core';
import { SessionRoomPreview } from '@qs-state';



@Component({
  selector: 'qs-user-home-preview',
  templateUrl: './qs-user-home-preview.component.html',
  styleUrls: ['./qs-user-home-preview.component.scss'],
})
export class UserHomePreviewComponent {
  title = "qs-user-home-preview";
  @Input() preview:SessionRoomPreview = {
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
