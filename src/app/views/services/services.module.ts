import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,ServicesRoutingModule } from './services-routing.module';
import { ServicesService } from './services.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    ServicesRoutingModule,
  ],
  exports:[...COMPONENTS],
  providers:[ServicesService],
})
export class ServicesModule { }
