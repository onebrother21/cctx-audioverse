import { Component } from '@angular/core';

@Component({
  selector: 'qs-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  title = "landing";
  greeting = "QS Audioverse has got your back!";
  oneliner = "New things happening inside...";
}
