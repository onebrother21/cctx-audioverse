import { Component } from '@angular/core';
import { Ad, Room } from '@state';
import { MeService } from '../me.service';

@Component({
  selector: 'qs-me-home',
  templateUrl: './me-home.component.html',
  styleUrls: ['./me-home.component.scss'],
})
export class MeHomeComponent {
  title = "me-home";
  rooms:Room[] = this.me.rooms;
  ads:Ad[] = this.me.ads;
  constructor(private me:MeService){

  }
}
