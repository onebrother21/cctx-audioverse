import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QS_ErrorComponent } from './qs-error';

const routes: Routes = [
  {path:"",component:QS_ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QS_ErrorRoutingModule { }
export const COMPONENTS = [
  QS_ErrorComponent,
];