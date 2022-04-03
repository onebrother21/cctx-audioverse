import { Component,Input,Output,EventEmitter } from '@angular/core';
import { NavItem } from '@state';

@Component({
  selector: 'qs-icon-menu',
  templateUrl: './icon-menu.component.html',
  styleUrls: ['./icon-menu.component.scss'],
})
export class IconMenuComponent {
  title = "icon-menu";
  @Input() items:NavItem[] = [];
  @Output() select:EventEmitter<NavItem> = new EventEmitter();
}
