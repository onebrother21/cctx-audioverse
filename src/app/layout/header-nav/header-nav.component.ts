import { Component, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'qs-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavMenuComponent {
  title = "header-nav";
  @Input() open:boolean = false;
}