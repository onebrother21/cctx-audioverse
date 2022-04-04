import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@state';
import { MeHomeComponent } from './me-home';
import { MeDashComponent } from './me-dash';
import { MeAccountComponent } from './me-acct';
import { MeAccountEditorComponent } from './me-editor-acct';
import { MeSettingsEditorComponent } from './me-editor-settings';
import { MeNotificationsComponent } from './me-notifications';
//import { MeMessagesComponent } from './me-msgs';
//import { MeNotifications2Component } from './me-notifications-2';
import { MeHomeAltComponent } from './me-home-alt';
import { MeEdtiorComponent } from './me-editor/me-editor.component';

const routes: Routes = [
  {path:"",canActivate:[AuthGuard],children:[
    {path:"",redirectTo:"hm",pathMatch:"full"},
    {path:"hm",component:MeHomeComponent},
    {path:"hm2",component:MeHomeAltComponent},
    {path:"dash",component:MeDashComponent},
    {path:"acct",component:MeAccountComponent},
    {path:"edit",component:MeEdtiorComponent,children:[
      {path:"acct",component:MeAccountEditorComponent},
      {path:"settings",component:MeSettingsEditorComponent},
    ]},
    //{path:"upgrade",component:MeAccountComponent},
    //{path:"msgs",component:MeMessagesComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeRoutingModule { }
export const COMPONENTS = [
  MeDashComponent,
  MeAccountComponent,
  MeEdtiorComponent,
  MeAccountEditorComponent,
  MeSettingsEditorComponent,
  MeHomeComponent,
  MeHomeAltComponent,
  MeNotificationsComponent,
  //MeMessagesComponent,
  //MeNotifications2Component,
];