import { Directive, ElementRef, Optional, Inject, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { filter,map } from 'rxjs/operators';

@Directive({
  selector: '[outsideClick]',
})
export class OutsideClickDirective implements OnInit, OnDestroy {
  @Output('outsideClick') outsideClick = new EventEmitter<boolean>();
  private subscription:Subscription = {} as Subscription;
  constructor(private element: ElementRef, @Optional() @Inject(DOCUMENT) private document: any) {}
  ngOnInit() {
    setTimeout(() => {
      this.subscription = fromEvent<MouseEvent>(this.document, 'click')
        .pipe(
          map(event => {
            const clickTarget = event.target as HTMLElement;
            return !this.isOrContainsClickTarget(this.element.nativeElement, clickTarget);
          }),
        )
        .subscribe(outside => this.outsideClick.emit(outside));
    }, 0);
  }
  private isOrContainsClickTarget(element: HTMLElement, clickTarget: HTMLElement) {
    return element == clickTarget || element.contains(clickTarget);
  }
  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
