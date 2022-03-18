import { Component } from '@angular/core';
import { Ad, Room } from '@state';
import { MeService } from '../me.service';

@Component({
  selector: 'qs-me-home-alt',
  templateUrl: './me-home-alt.component.html',
  styleUrls: ['./me-home-alt.component.scss'],
})
export class MeHomeAltComponent {
  title = "me-home-alt";
  rooms:Room[] = this.me.rooms;
  ads:Ad[] = this.me.ads;
  constructor(private me:MeService){

  }
}
