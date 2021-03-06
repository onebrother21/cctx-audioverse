import { Component, Input, Renderer2 } from '@angular/core';
import { Enum,AppNavItem } from '@state';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'qs-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavMenuComponent {
  title = "header-nav";
  isAuthed:boolean = false;
  menus:Enum<AppNavItem[],string> = {};
  open:boolean = false;
  constructor(private layout:LayoutService){
    this.layout.isAuthed$.subscribe(auth => this.isAuthed = auth);
    this.layout.headerNav$.subscribe(nav => this.open = nav?.open||false);
    this.layout.content$.subscribe(content => this.menus = content?.menus||{});
  } 
}