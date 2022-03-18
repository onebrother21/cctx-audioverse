import { Component } from '@angular/core';
import { QS_Room } from '@qs-state';
import { QS_RoomsService } from '../qs-rooms.service';

@Component({
  selector: 'qs-room-list',
  templateUrl: './qs-room-list.component.html',
  styleUrls: ['./qs-room-list.component.scss'],
})
export class QS_RoomListComponent {
  title = "qs-room-list";
  items:QS_Room[] = this.rooms.items;
  constructor(private rooms:QS_RoomsService){}
  selectItem(item:QS_Room){console.log(item);}
}