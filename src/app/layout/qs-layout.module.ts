import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { QS_SharedModule } from '@qs-shared';
import { COMPONENTS,QS_LayoutRoutingModule } from "./qs-layout-routing.module";

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    QS_SharedModule,
    QS_LayoutRoutingModule,
  ],
  exports:[...COMPONENTS],
})

export class QS_LayoutModule { }
