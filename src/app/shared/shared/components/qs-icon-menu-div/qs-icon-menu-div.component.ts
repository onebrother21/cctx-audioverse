import { Component } from '@angular/core';
import { QS_Icon } from '@qs-state';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'qs-icon-menu-div',
  templateUrl: './qs-icon-menu-div.component.html',
  styleUrls: ['./qs-icon-menu-div.component.scss'],
})
export class QS_IconMenuDivComponent {
  title = "qs-icon-menu-div";
  menu:QS_Icon[] = this.layout.menu;
  constructor(private layout:LayoutService){}
  selectItem(item:QS_Icon){console.log(item);}
}