import { Component } from '@angular/core';
import { Ad, Room, User, UserJson } from '@state';
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
  me:Partial<UserJson> = {};
  constructor(private user:MeService){
    this.user.me$.subscribe(me => this.me = me);
  }
  getMemberGreeting(){return 'Welcome'+(this.isNewMember()?'':' back');}
  isNewMember(){
    if(!(this.me && this.me.memberSince)) return true;
    const today = new Date().getTime();
    const joindate = new Date(this.me.memberSince).getTime();
    const oneday = 24 * 60 * 60 * 1000;
    return today - joindate <= oneday;
  }
}
