import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SharedModule } from '@qs-shared';
import { SessionsCommentsService } from './qs-messages-reply.service';
import { COMPONENTS ,SessionsRoutingModule } from './qs-messages-routing.module';
import { SessionsService } from './qs-messages.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    SessionsRoutingModule,
    SharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[SessionsService,SessionsCommentsService],
})
export class SessionsModule { }
