import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { QS_SharedModule } from '@qs-shared';
import { COMPONENTS ,QS_HomeRoutingModule } from './qs-home-routing.module';
import { QS_HomeService } from './qs-home.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    QS_HomeRoutingModule,
    QS_SharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[QS_HomeService],
})
export class QS_HomeModule { }
