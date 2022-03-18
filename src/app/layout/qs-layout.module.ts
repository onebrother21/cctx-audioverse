import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SharedModule } from '@qs-shared';
import { COMPONENTS,LayoutRoutingModule } from "./qs-layout-routing.module";

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    SharedModule,
    LayoutRoutingModule,
  ],
  exports:[...COMPONENTS],
})

export class LayoutModule { }
