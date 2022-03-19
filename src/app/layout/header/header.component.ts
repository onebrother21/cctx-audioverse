import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'qs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = "header";
  headerNavOpen = false;
  toggleHeaderNav(outside?:boolean){
    this.headerNavOpen = outside == undefined || !outside?!this.headerNavOpen:false;
  }
}
