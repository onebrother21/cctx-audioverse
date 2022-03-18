import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'qs-footer',
  templateUrl: './qs-footer.component.html',
  styleUrls: ['./qs-footer.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class QS_FooterComponent {
  title = "qs-footer";
  footer = {
    text:
    "Sample text. Click to select the text box. "+
    "Click again or double click to start editing the text."
  };
}
