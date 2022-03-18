import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashComponent } from './qs-me-dash';
import { UserAccountComponent } from './qs-me-account';
import { UserHomeComponent } from './qs-me-home';
import { UserHomePreviewComponent } from './qs-user-home-preview';
import { UserHomePreviewsComponent } from '../qs-rooms/qs-room-previews';
import { UserMessagesComponent } from './qs-user-msgs';
import { UserAccountEditorComponent } from './qs-me-editor';
import { UserHomeIconTrayOneComponent } from './qs-me-notifications';
import { UserHomeIconTrayTwoComponent } from './qs-user-home-icon-tray-2';
import { UserHomeAltComponent } from './qs-me-home-alt';

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
  UserHomePreviewComponent,
  UserHomePreviewsComponent,
  UserMessagesComponent,
  UserAccountEditorComponent,
  UserHomeIconTrayOneComponent,
  UserHomeIconTrayTwoComponent,
];