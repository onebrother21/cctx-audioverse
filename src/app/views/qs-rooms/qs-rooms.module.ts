import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SharedModule } from '@qs-shared';
import { RoomsCommentsService } from './qs-rooms-comments.service';
import { COMPONENTS ,RoomsRoutingModule } from './qs-rooms-routing.module';
import { RoomsService } from './qs-rooms.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    RoomsRoutingModule,
    SharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[RoomsService,RoomsCommentsService],
})
export class RoomsModule { }
