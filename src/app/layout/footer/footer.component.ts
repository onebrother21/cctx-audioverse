import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'qs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class FooterComponent {
  title = "footer";
}
