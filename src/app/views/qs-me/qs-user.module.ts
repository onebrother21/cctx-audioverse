import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SharedModule } from '@qs-shared';
import { COMPONENTS ,UserRoutingModule } from './qs-user-routing.module';
import { UserService } from './qs-user.service';

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
