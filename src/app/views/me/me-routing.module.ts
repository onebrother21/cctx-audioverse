import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashComponent } from './me-dash';
import { UserAccountComponent } from './me-account';
import { UserHomeComponent } from './me-home';
import { UserMessagesComponent } from './me-msgs';
import { UserAccountEditorComponent } from './me-editor';
import { UserHomeIconTrayOneComponent } from './me-notifications';
import { UserHomeIconTrayTwoComponent } from './me-home-icon-tray-2';
import { UserHomeAltComponent } from './me-home-alt';

const routes: Routes = [
  {path:"",redirectTo:"hm",pathMatch:"full"},
  {path:"hm",component:UserHomeComponent},
  {path:"hm2",component:UserHomeAltComponent},
  {path:"dash",component:UserDashComponent},
  {path:"acct",component:UserAccountComponent},
  {path:"edit",component:UserAccountEditorComponent},
  {path:"upgrade",component:UserAccountComponent},
  {path:"msgs",component:UserMessagesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
export const COMPONENTS = [
  UserDashComponent,
  UserAccountComponent,
  UserHomeComponent,
  UserHomeAltComponent,
  UserMessagesComponent,
  UserAccountEditorComponent,
  UserHomeIconTrayOneComponent,
  UserHomeIconTrayTwoComponent,
];