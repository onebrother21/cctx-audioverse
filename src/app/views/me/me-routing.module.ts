import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeDashComponent } from './me-dash';
import { MeAccountComponent } from './me-acct';
import { MeHomeComponent } from './me-home';
import { MeMessagesComponent } from './me-msgs';
import { MeAccountEditorComponent } from './me-acct-editor';
import { MeNotificationsComponent } from './me-notifications';
import { MeNotifications2Component } from './me-notifications-2';
import { MeHomeAltComponent } from './me-home-alt';
import { MeSettingsEditorComponent } from './me-settings-editor';

const routes: Routes = [
  {path:"",redirectTo:"hm",pathMatch:"full"},
  {path:"hm",component:MeHomeComponent},
  {path:"hm2",component:MeHomeAltComponent},
  {path:"dash",component:MeDashComponent},
  {path:"acct",component:MeAccountComponent},
  {path:"edit/acct",component:MeAccountEditorComponent},
  {path:"edit/settings",component:MeSettingsEditorComponent},
  {path:"upgrade",component:MeAccountComponent},
  {path:"msgs",component:MeMessagesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeRoutingModule { }
export const COMPONENTS = [
  MeDashComponent,
  MeAccountComponent,
  MeAccountEditorComponent,
  MeSettingsEditorComponent,
  MeHomeComponent,
  MeHomeAltComponent,
  MeMessagesComponent,
  MeNotificationsComponent,
  MeNotifications2Component,
];