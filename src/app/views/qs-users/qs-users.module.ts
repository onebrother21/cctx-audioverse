import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SharedModule } from '@qs-shared';
import { SessionsCommentsService } from './qs-users-comments.service';
import { COMPONENTS ,SessionsRoutingModule } from './qs-users-routing.module';
import { SessionsService } from './qs-users.service';

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
