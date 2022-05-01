import { Component,Input,Output,EventEmitter } from '@angular/core';
import { AppNavItem } from '@state';

@Component({
  selector: 'qs-icon-menu',
  templateUrl: './icon-menu.component.html',
  styleUrls: ['./icon-menu.component.scss'],
})
export class IconMenuComponent {
  title = "icon-menu";
  @Input() items:AppNavItem[] = [];
  @Output() select:EventEmitter<AppNavItem> = new EventEmitter();
}
