import { Component } from '@angular/core';
import { Session } from '@qs-state';
import { SessionsService } from '../qs-messages.service';

@Component({
  selector: 'qs-session-list',
  templateUrl: './qs-session-list.component.html',
  styleUrls: ['./qs-session-list.component.scss'],
})
export class SessionListComponent {
  title = "qs-session-list";
  items:Session[] = this.sessions.items;
  constructor(private sessions:SessionsService){}
  selectItem(item:Session){console.log(item);}
}