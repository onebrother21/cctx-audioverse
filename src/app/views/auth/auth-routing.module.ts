import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from '@state';
import { AuthComponent } from './auth';
import { AuthSignInComponent } from './auth-signin';
import { AuthSignUpComponent } from './auth-signup';
import { AuthSignOutComponent } from './auth-signout';
import { AuthVerifyComponent } from './auth-verify';
import { AuthRegisterComponent } from './auth-register';
import { AuthRegisterExtComponent } from './auth-register-ext';
import { AuthUpdatePinComponent } from './auth-update-pin';
import { AuthLoginComponent } from './auth-login';
import { AuthForgotComponent } from './auth-forgot';//use this for both forgots

const routes: Routes = [
  {path:"",canActivate:[NoAuthGuard],component:AuthComponent,children:[
    {path:"",redirectTo:"signup",pathMatch:"full"},
    {path:"signin",component:AuthSignInComponent},
    {path:"signup",component:AuthSignUpComponent},
    {path:"verify",component:AuthVerifyComponent},
    {path:"register",component:AuthRegisterComponent},
    {path:"register-ext",component:AuthRegisterExtComponent},
    {path:"update-pin",component:AuthUpdatePinComponent},
    {path:"confirm-pin",component:AuthUpdatePinComponent},
    {path:"login",component:AuthLoginComponent},
  ]},
  {path:"forgot-username",component:AuthForgotComponent},
  {path:"forgot-pin",component:AuthForgotComponent},
  {path:"signout",component:AuthSignOutComponent},
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