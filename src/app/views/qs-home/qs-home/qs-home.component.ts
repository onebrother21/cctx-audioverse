import { Component } from '@angular/core';

@Component({
  selector: 'qs-home',
  templateUrl: './qs-home.component.html',
  styleUrls: ['./qs-home.component.scss'],
})
export class HomeComponent {
  title = "qs-home";
  greeting = "QS Audioverse has got your back!";
  oneliner = "New things happening inside...";
}
