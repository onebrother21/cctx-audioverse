import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QS_ServicesDashComponent } from './qs-services-dash';
import { QS_FAQComponent } from './qs-faq';
import { QS_ContactUsComponent } from './qs-contact-us';

const routes: Routes = [
  {path:"",redirectTo:"dash",pathMatch:"full"},
  {path:"dash",component:QS_ServicesDashComponent},
  {path:"faq",component:QS_FAQComponent},
  {path:"contact",component:QS_ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QS_ServicesRoutingModule { }
export const COMPONENTS = [
  QS_ServicesDashComponent,
];