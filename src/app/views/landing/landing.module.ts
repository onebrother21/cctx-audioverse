import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,LandingRoutingModule } from './landing-routing.module';
import { LandingService } from './landing.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    LandingRoutingModule,
    SharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[LandingService],
})
export class LandingModule { }
