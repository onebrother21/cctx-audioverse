import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Icon } from '@qs-state';

@Component({
  selector: 'qs-icon-menu',
  templateUrl: './qs-icon-menu.component.html',
  styleUrls: ['./qs-icon-menu.component.scss'],
})
export class IconMenuComponent {
  title = "qs-icon-menu";
  @Input() items:Icon[] = [];
  @Output() select:EventEmitter<Icon> = new EventEmitter();
}
