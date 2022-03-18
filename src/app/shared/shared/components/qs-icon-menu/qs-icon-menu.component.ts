import { Component,Input,Output,EventEmitter } from '@angular/core';
import { QS_Icon } from '@qs-state';

@Component({
  selector: 'qs-icon-menu',
  templateUrl: './qs-icon-menu.component.html',
  styleUrls: ['./qs-icon-menu.component.scss'],
})
export class QS_IconMenuComponent {
  title = "qs-icon-menu";
  @Input() items:QS_Icon[] = [];
  @Output() select:EventEmitter<QS_Icon> = new EventEmitter();
}
