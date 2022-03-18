import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './qs-room';
import { RoomEditorComponent } from './qs-room-editor';
import { RoomListComponent } from './qs-room-list';

const routes: Routes = [
  {path:"",redirectTo:"recent",pathMatch:"full"},
  {path:"recent",component:RoomListComponent},
  {path:"new",component:RoomEditorComponent},
  {path:"room/:id",component:RoomComponent},
  {path:":id",component:RoomComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
export const COMPONENTS = [
  RoomComponent,
  RoomListComponent,
  RoomEditorComponent,
];