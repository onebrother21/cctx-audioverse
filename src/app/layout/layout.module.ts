import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS,LayoutRoutingModule } from "./layout-routing.module";
import { LayoutService } from './layout.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    LayoutRoutingModule,
  ],
  exports:[...COMPONENTS],
  providers:[LayoutService],
})

export class LayoutModule { }
