import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'qs',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'qs';
  one = "p";
}