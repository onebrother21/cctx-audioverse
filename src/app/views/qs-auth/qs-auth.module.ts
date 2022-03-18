import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SharedModule } from '@qs-shared';
import { AuthService } from './qs-auth.service';
import { COMPONENTS,AuthRoutingModule } from './qs-auth-routing.module';

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
