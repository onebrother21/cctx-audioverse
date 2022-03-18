import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SharedModule } from '@qs-shared';
import { COMPONENTS ,HomeRoutingModule } from './qs-home-routing.module';
import { HomeService } from './qs-home.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    HomeRoutingModule,
    SharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[HomeService],
})
export class HomeModule { }
