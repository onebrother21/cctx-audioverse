import { Component } from '@angular/core';
import { QS_Session } from '@qs-state';
import { QS_SessionsService } from '../qs-tasks.service';

@Component({
  selector: 'qs-session-list',
  templateUrl: './qs-session-list.component.html',
  styleUrls: ['./qs-session-list.component.scss'],
})
export class QS_SessionListComponent {
  title = "qs-session-list";
  items:QS_Session[] = this.sessions.items;
  constructor(private sessions:QS_SessionsService){}
  selectItem(item:QS_Session){console.log(item);}
}