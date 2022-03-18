import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './qs-auth';
import { AuthSignInComponent } from './qs-auth-signin';
import { AuthSignUpComponent } from './qs-auth-signup';
import { AuthSignOutComponent } from './qs-auth-signout';
import { AuthVerifyComponent } from './qs-auth-verify';
import { AuthRegisterComponent } from './qs-auth-register';//use this for all register
import { AuthRegisterExtComponent } from './qs-auth-register-ext';
import { AuthUpdatePinComponent } from './qs-auth-update-pin';//confirm pin
import { AuthLoginComponent } from './qs-auth-login';
import { AuthForgotComponent } from './qs-auth-forgot';//use this for both forgots

const routes: Routes = [
  {path:"",component:AuthComponent,children:[
    {path:"",redirectTo:"signup",pathMatch:"full"},
    {path:"signin",component:AuthSignInComponent},
    {path:"signup",component:AuthSignUpComponent},
    {path:"verify",component:AuthVerifyComponent},
    {path:"register",component:AuthRegisterComponent},
    {path:"register-ext",component:AuthRegisterExtComponent},
    {path:"update-pin",component:AuthUpdatePinComponent},
    {path:"confirm-pin",component:AuthUpdatePinComponent},
    {path:"login",component:AuthLoginComponent},
    {path:"forgot-username",component:AuthForgotComponent},
    {path:"forgot-pin",component:AuthForgotComponent},
    {path:"signout",component:AuthSignOutComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
export const COMPONENTS = [
  AuthComponent,
  AuthForgotComponent,
  AuthLoginComponent,
  AuthRegisterComponent,
  AuthRegisterExtComponent,
  AuthSignInComponent,
  AuthSignOutComponent,
  AuthSignUpComponent,
  AuthUpdatePinComponent,
  AuthVerifyComponent,
];