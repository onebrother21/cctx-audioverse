import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { QS_SharedModule } from '@qs-shared';
import { COMPONENTS ,QS_ServicesRoutingModule } from './qs-services-routing.module';
import { QS_ServicesService } from './qs-services.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    QS_ServicesRoutingModule,
    QS_SharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[QS_ServicesService],
})
export class QS_ServicesModule { }
