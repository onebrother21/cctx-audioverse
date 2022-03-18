import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionComponent } from './qs-user';
import { SessionEditorComponent } from './qs-session-editor';
import { SessionListComponent } from './qs-user-list';
import { SessionRoomComponent } from './qs-session-room';

const routes: Routes = [
  {path:"",redirectTo:"recent",pathMatch:"full"},
  {path:"recent",component:SessionListComponent},
  {path:"new",component:SessionEditorComponent},
  {path:"room/:id",component:SessionRoomComponent},
  {path:":id",component:SessionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
export const COMPONENTS = [
  SessionComponent,
  SessionRoomComponent,
  SessionListComponent,
  SessionEditorComponent,
];