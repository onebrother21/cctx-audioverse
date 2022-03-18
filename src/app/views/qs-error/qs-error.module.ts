import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,ErrorRoutingModule } from './qs-error-routing.module';
import { ErrorService } from './qs-error.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    ErrorRoutingModule
  ],
  exports:[...COMPONENTS],
  providers:[ErrorService],
})
export class ErrorModule { }