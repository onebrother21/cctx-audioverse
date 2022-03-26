import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[dateClick]'
})
export class DateClickDirective {
  @HostListener('focus') onMouseFocus() {
    this.el.nativeElement.type = 'date';
    setTimeout(()=>{this.el.nativeElement.click()},10);
  }
  @HostListener('blur') onMouseBlur() {
    if(this.el.nativeElement.value == ""){
      this.el.nativeElement.type = 'text';
    }
  }
  constructor(private el:ElementRef) { }
}