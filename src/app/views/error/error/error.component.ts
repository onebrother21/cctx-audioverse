import { Component } from '@angular/core';

@Component({
  selector: 'qs-error',
  templateUrl: './qs-error.component.html',
  styleUrls: ['./qs-error.component.scss'],
})
export class ErrorComponent {
  title = "qs-error";
  errors = {
    notFound:"Looks like you're a bit lost...click here to go back",
    server:"Looks like you're a bit lost...click here to go back",
  };
}
