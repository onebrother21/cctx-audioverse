import { Component } from '@angular/core';

@Component({
  selector: 'qs-banner',
  templateUrl: './qs-banner.component.html',
  styleUrls: ['./qs-banner.component.scss'],
})
export class QS_BannerComponent {
  title = "qs-banner";
  greeting = "QS Audioverse has got your back!";
  oneliner = "New things happening inside...";
}
