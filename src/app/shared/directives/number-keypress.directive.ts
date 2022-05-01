import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[numKeypress]'
})
export class NumberKeyPressDirective {
  @Output() numKeyup:EventEmitter<string> = new EventEmitter();
  @HostListener('document:keypress',['$event']) onKeyDown(e:KeyboardEvent) {
    const isNumber = /^[0-9]$/i.test(e.key);
    if(isNumber) this.numKeyup.emit(e.key);
  }
}
