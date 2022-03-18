import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'qs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class FooterComponent {
  title = "footer";
  footer = {
    text:
    "Sample text. Click to select the text box. "+
    "Click again or double click to start editing the text."
  };
}
