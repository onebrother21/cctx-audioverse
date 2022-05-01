import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesDashComponent } from './services-dash';
import { FAQComponent } from './faq';
import { ContactUsComponent } from './contact-us';

const routes: Routes = [
  {path:"",redirectTo:"dash",pathMatch:"full"},
  {path:"dash",component:ServicesDashComponent},
  {path:"faq",component:FAQComponent},
  {path:"contact",component:ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
export const COMPONENTS = [
  ServicesDashComponent,
  FAQComponent,
  ContactUsComponent,
];