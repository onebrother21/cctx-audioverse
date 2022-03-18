import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QS_SessionComponent } from './qs-messages';
import { QS_SessionEditorComponent } from './qs-message-editor';
import { QS_SessionListComponent } from './qs-message-list';
import { QS_SessionRoomComponent } from './qs-session-room';

const routes: Routes = [
  {path:"",redirectTo:"recent",pathMatch:"full"},
  {path:"recent",component:QS_SessionListComponent},
  {path:"new",component:QS_SessionEditorComponent},
  {path:"room/:id",component:QS_SessionRoomComponent},
  {path:":id",component:QS_SessionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QS_SessionsRoutingModule { }
export const COMPONENTS = [
  QS_SessionComponent,
  QS_SessionRoomComponent,
  QS_SessionListComponent,
  QS_SessionEditorComponent,
];