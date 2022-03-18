import { Component } from '@angular/core';
import { Room } from '@qs-state';
import { RoomsService } from '../qs-rooms.service';

@Component({
  selector: 'qs-room-list',
  templateUrl: './qs-room-list.component.html',
  styleUrls: ['./qs-room-list.component.scss'],
})
export class RoomListComponent {
  title = "qs-room-list";
  items:Room[] = this.rooms.items;
  constructor(private rooms:RoomsService){}
  selectItem(item:Room){console.log(item);}
}