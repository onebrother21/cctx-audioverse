import { Component } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'qs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = "header";
  navOpen?:boolean = false;
  constructor(private layout:LayoutService){this.layout.headerNav$.subscribe(nav => this.navOpen = nav?.open);}
  toggleNav(outside?:boolean){outside && !this.navOpen?null:this.layout.toggleMenu(outside);}
}
