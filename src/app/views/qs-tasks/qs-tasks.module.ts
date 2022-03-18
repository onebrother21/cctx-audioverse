import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SharedModule } from '@qs-shared';
import { SessionsCommentsService } from './qs-tasks-comments.service';
import { COMPONENTS ,SessionsRoutingModule } from './qs-tasks-routing.module';
import { SessionsService } from './qs-tasks.service';

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
