import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QS_AuthComponent } from './qs-auth';
import { QS_AuthSignInComponent } from './qs-auth-signin';
import { QS_AuthSignUpComponent } from './qs-auth-signup';
import { QS_AuthSignOutComponent } from './qs-auth-signout';
import { QS_AuthVerifyComponent } from './qs-auth-verify';
import { QS_AuthRegisterComponent } from './qs-auth-register';//use this for all register
import { QS_AuthRegisterExtComponent } from './qs-auth-register-ext';
import { QS_AuthUpdatePinComponent } from './qs-auth-update-pin';//confirm pin
import { QS_AuthLoginComponent } from './qs-auth-login';
import { QS_AuthForgotComponent } from './qs-auth-forgot';//use this for both forgots

const routes: Routes = [
  {path:"",component:QS_AuthComponent,children:[
    {path:"",redirectTo:"signup",pathMatch:"full"},
    {path:"signin",component:QS_AuthSignInComponent},
    {path:"signup",component:QS_AuthSignUpComponent},
    {path:"verify",component:QS_AuthVerifyComponent},
    {path:"register",component:QS_AuthRegisterComponent},
    {path:"register-ext",component:QS_AuthRegisterExtComponent},
    {path:"update-pin",component:QS_AuthUpdatePinComponent},
    {path:"confirm-pin",component:QS_AuthUpdatePinComponent},
    {path:"login",component:QS_AuthLoginComponent},
    {path:"forgot-username",component:QS_AuthForgotComponent},
    {path:"forgot-pin",component:QS_AuthForgotComponent},
    {path:"signout",component:QS_AuthSignOutComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QS_AuthRoutingModule { }
export const COMPONENTS = [
  QS_AuthComponent,
  QS_AuthForgotComponent,
  QS_AuthLoginComponent,
  QS_AuthRegisterComponent,
  QS_AuthRegisterExtComponent,
  QS_AuthSignInComponent,
  QS_AuthSignOutComponent,
  QS_AuthSignUpComponent,
  QS_AuthUpdatePinComponent,
  QS_AuthVerifyComponent,
];