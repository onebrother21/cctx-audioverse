import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QS_HeaderComponent } from './qs-header';
import { QS_FooterComponent } from './qs-footer';
import { QS_FooterTwoComponent } from './qs-footer-two';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QS_LayoutRoutingModule { }

export const COMPONENTS = [
  QS_HeaderComponent,
  QS_FooterComponent,
  QS_FooterTwoComponent,
];