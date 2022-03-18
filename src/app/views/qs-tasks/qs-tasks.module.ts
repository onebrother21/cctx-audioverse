import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { QS_SharedModule } from '@qs-shared';
import { QS_SessionsCommentsService } from './qs-tasks-comments.service';
import { COMPONENTS ,QS_SessionsRoutingModule } from './qs-tasks-routing.module';
import { QS_SessionsService } from './qs-tasks.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    QS_SessionsRoutingModule,
    QS_SharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[QS_SessionsService,QS_SessionsCommentsService],
})
export class QS_SessionsModule { }
