import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,UserRoutingModule } from './me-routing.module';
import { UserService } from './me.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    UserRoutingModule,
    SharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[UserService],
})
export class UserModule { }
