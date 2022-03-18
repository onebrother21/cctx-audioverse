import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AuthService } from './auth.service';
import { COMPONENTS,AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    AuthRoutingModule,
    SharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[AuthService],
})
export class AuthModule { }
