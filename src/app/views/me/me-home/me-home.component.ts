import { Component } from '@angular/core';
import { Ad, Room, User } from '@state';
import { MeService } from '../me.service';

@Component({
  selector: 'qs-me-home',
  templateUrl: './me-home.component.html',
  styleUrls: ['./me-home.component.scss'],
})
export class MeHomeComponent {
  title = "me-home";
  rooms:Room[] = this.user.rooms;
  ads:Ad[] = this.user.ads;
  me:Partial<User> = {};
  constructor(private user:MeService){
    this.user.me$.subscribe(me => this.me = me);
  }
}
