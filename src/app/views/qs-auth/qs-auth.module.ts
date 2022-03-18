import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { QS_SharedModule } from '@qs-shared';
import { QS_AuthService } from './qs-auth.service';
import { COMPONENTS,QS_AuthRoutingModule } from './qs-auth-routing.module';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    QS_AuthRoutingModule,
    QS_SharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[QS_AuthService],
})
export class QS_AuthModule { }
