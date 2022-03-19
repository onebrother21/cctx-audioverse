import { Component } from '@angular/core';

@Component({
  selector: 'qs-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  title = "landing";
  greeting = "Audioverse";
  oneliner = "Real sounds. Real people. Realtime.";
}
