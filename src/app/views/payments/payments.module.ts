import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { PaymentsService } from './payments.service';
import { COMPONENTS,PaymentsRoutingModule } from './payments-routing.module';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    PaymentsRoutingModule,
  ],
  exports:[...COMPONENTS],
  providers:[PaymentsService],
})
export class PaymentsModule { }
