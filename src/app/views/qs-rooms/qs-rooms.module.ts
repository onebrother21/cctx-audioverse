import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { QS_SharedModule } from '@qs-shared';
import { QS_RoomsCommentsService } from './qs-rooms-comments.service';
import { COMPONENTS ,QS_RoomsRoutingModule } from './qs-rooms-routing.module';
import { QS_RoomsService } from './qs-rooms.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    QS_RoomsRoutingModule,
    QS_SharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[QS_RoomsService,QS_RoomsCommentsService],
})
export class QS_RoomsModule { }
