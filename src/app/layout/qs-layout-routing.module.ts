import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './qs-header';
import { FooterComponent } from './qs-footer';
import { FooterTwoComponent } from './qs-footer-two';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

export const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  FooterTwoComponent,
];