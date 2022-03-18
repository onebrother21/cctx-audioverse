import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,QS_ErrorRoutingModule } from './qs-error-routing.module';
import { QS_ErrorService } from './qs-error.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    QS_ErrorRoutingModule
  ],
  exports:[...COMPONENTS],
  providers:[QS_ErrorService],
})
export class QS_ErrorModule { }