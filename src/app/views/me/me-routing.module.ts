import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@state';
import { MeHomeComponent } from './me-home';
import { MeDashComponent } from './me-dash';
import { MeAccountComponent } from './me-acct';
import { MeEditorComponent } from './me-editor';
import { MeEditorAccountComponent } from './me-editor-acct';
import { MeEditorSettingsComponent } from './me-editor-settings';
import { MeNotificationsComponent } from './me-notifications';
import { MeMessagesComponent } from './me-msgs';
import { MeHomeAltComponent } from './me-home-alt';

const routes: Routes = [
  {path:"",canActivate:[AuthGuard],children:[
    {path:"",redirectTo:"hm",pathMatch:"full"},
    {path:"hm",component:MeHomeComponent},
    {path:"dash",component:MeDashComponent},
    {path:"msgs",component:MeMessagesComponent},
    {path:"acct",component:MeAccountComponent},
    {path:"edit",component:MeEditorComponent,children:[
      {path:"acct",component:MeEditorAccountComponent},
      {path:"settings",component:MeEditorSettingsComponent},
    ]},
    {path:"hm2",component:MeHomeAltComponent},
    //{path:"upgrade",component:MeAccountComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeRoutingModule { }
export const COMPONENTS = [
  MeHomeComponent,
  MeDashComponent,
  MeAccountComponent,
  MeEditorComponent,
  MeEditorAccountComponent,
  MeEditorSettingsComponent,
  MeHomeAltComponent,
  MeNotificationsComponent,
  MeMessagesComponent,
];