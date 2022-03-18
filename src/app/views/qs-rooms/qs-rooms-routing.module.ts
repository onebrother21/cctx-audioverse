import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QS_RoomComponent } from './qs-room';
import { QS_RoomEditorComponent } from './qs-room-editor';
import { QS_RoomListComponent } from './qs-room-list';

const routes: Routes = [
  {path:"",redirectTo:"recent",pathMatch:"full"},
  {path:"recent",component:QS_RoomListComponent},
  {path:"new",component:QS_RoomEditorComponent},
  {path:"room/:id",component:QS_RoomComponent},
  {path:":id",component:QS_RoomComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QS_RoomsRoutingModule { }
export const COMPONENTS = [
  QS_RoomComponent,
  QS_RoomListComponent,
  QS_RoomEditorComponent,
];