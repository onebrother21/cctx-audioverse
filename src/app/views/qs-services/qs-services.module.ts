import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SharedModule } from '@qs-shared';
import { COMPONENTS ,ServicesRoutingModule } from './qs-services-routing.module';
import { ServicesService } from './qs-services.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    ServicesRoutingModule,
    SharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[ServicesService],
})
export class ServicesModule { }
