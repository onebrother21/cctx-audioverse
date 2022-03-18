import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,ErrorRoutingModule } from './error-routing.module';
import { ErrorService } from './error.service';

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