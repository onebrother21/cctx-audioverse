import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,MeRoutingModule } from './me-routing.module';
import { MeService } from './me.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    MeRoutingModule,
  ],
  exports:[...COMPONENTS],
  providers:[MeService],
})
export class MeModule { }
