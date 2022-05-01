import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@state';
import { PaymentsComponent } from './payments';
import { PaymentsCheckoutComponent } from './payments-checkout';

const routes: Routes = [
  {path:"",canActivate:[AuthGuard],component:PaymentsComponent,children:[
    {path:"",redirectTo:"checkout",pathMatch:"full"},
    {path:"checkout",component:PaymentsCheckoutComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
export const COMPONENTS = [
  PaymentsComponent,
  PaymentsCheckoutComponent,
];