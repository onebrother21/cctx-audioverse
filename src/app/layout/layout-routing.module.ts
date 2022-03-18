import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { FooterTwoComponent } from './footer-two';

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