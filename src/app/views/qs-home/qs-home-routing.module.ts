import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QS_HomeComponent } from './qs-home';

const routes: Routes = [
  {path:"",component:QS_HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QS_HomeRoutingModule { }
export const COMPONENTS = [
  QS_HomeComponent,
];