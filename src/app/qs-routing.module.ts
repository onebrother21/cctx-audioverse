import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QS_Component } from './qs.component';

const routes: Routes = [
  {path:"",component:QS_Component,children:[
    {path:"",loadChildren: () => import("./views/qs-home").then(m => m.QS_HomeModule)},
    {path:"me",loadChildren: () => import("./views/qs-me").then(m => m.QS_UserModule)},
    {path:"secur01",loadChildren: () => import("./views/qs-auth").then(m => m.QS_AuthModule)},
    {path:"rooms",loadChildren: () => import("./views/qs-sessions").then(m => m.QS_SessionsModule)},
    {path:"u",loadChildren: () => import("./views/qs-sessions").then(m => m.QS_SessionsModule)},
    {path:"sessions",loadChildren: () => import("./views/qs-sessions").then(m => m.QS_SessionsModule)},
    {path:"sessions",loadChildren: () => import("./views/qs-sessions").then(m => m.QS_SessionsModule)},
    {path:"services",loadChildren: () => import("./views/qs-services").then(m => m.QS_ServicesModule)},
    {path:"**",loadChildren: () => import("./views/qs-error").then(m => m.QS_ErrorModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QS_RoutingModule { }