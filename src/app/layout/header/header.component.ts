import { Component } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'qs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = "header";
  menuOpen?:boolean = false;
  constructor(private layout:LayoutService){this.layout.headerNav$.subscribe(nav => this.menuOpen = nav.open);}
  toggleMenu(outside?:boolean){this.layout.toggleMenu(outside);}
}
