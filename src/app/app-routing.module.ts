import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",loadChildren: () => import("./views/qs-home").then(m => m.HomeModule)},
  {path:"me",loadChildren: () => import("./views/qs-me").then(m => m.UserModule)},
  {path:"secur01",loadChildren: () => import("./views/qs-auth").then(m => m.AuthModule)},
  {path:"rooms",loadChildren: () => import("./views/qs-sessions").then(m => m.SessionsModule)},
  {path:"u",loadChildren: () => import("./views/qs-sessions").then(m => m.SessionsModule)},
  {path:"sessions",loadChildren: () => import("./views/qs-sessions").then(m => m.SessionsModule)},
  {path:"sessions",loadChildren: () => import("./views/qs-sessions").then(m => m.SessionsModule)},
  {path:"services",loadChildren: () => import("./views/qs-services").then(m => m.ServicesModule)},
  {path:"**",loadChildren: () => import("./views/qs-error").then(m => m.ErrorModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
