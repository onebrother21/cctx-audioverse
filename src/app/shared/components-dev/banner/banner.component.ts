import { Component } from '@angular/core';

@Component({
  selector: 'qs-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  title = "banner";
  greeting = "QS Audioverse has got your back!";
  oneliner = "New things happening inside...";
}
