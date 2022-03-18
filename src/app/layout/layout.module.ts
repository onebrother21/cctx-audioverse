import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS,LayoutRoutingModule } from "./layout-routing.module";

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
