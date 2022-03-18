import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { QS_SharedModule } from '@qs-shared';
import { COMPONENTS ,QS_UserRoutingModule } from './qs-user-routing.module';
import { QS_UserService } from './qs-user.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    QS_UserRoutingModule,
    QS_SharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[QS_UserService],
})
export class QS_UserModule { }
