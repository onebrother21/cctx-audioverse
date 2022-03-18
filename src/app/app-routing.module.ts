import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './views/landing/landing';

const routes: Routes = [
  {path:"",component:LandingComponent},
  {path:"me",loadChildren: () => import("./views/me").then(m => m.MeModule)},
  {path:"secur01",loadChildren: () => import("./views/auth").then(m => m.AuthModule)},
  //{path:"rooms",loadChildren: () => import("./views/sessions").then(m => m.SessionsModule)},
  //{path:"u",loadChildren: () => import("./views/sessions").then(m => m.SessionsModule)},
  //{path:"sessions",loadChildren: () => import("./views/sessions").then(m => m.SessionsModule)},
  //{path:"sessions",loadChildren: () => import("./views/sessions").then(m => m.SessionsModule)},
  //{path:"services",loadChildren: () => import("./views/services").then(m => m.ServicesModule)},
  {path:"**",loadChildren: () => import("./views/error").then(m => m.ErrorModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
