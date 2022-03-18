import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Icon } from '@state';

@Component({
  selector: 'qs-icon-menu',
  templateUrl: './icon-menu.component.html',
  styleUrls: ['./icon-menu.component.scss'],
})
export class IconMenuComponent {
  title = "icon-menu";
  @Input() items:Icon[] = [];
  @Output() select:EventEmitter<Icon> = new EventEmitter();
}
