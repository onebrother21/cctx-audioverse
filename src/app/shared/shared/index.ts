import { NgModule } from "@angular/core";
import { SharedModule } from "@shared";
import { COMPONENTS } from "./components";
import { DIRECTIVES } from "./directives";
import { QS_SharedRoutingModule } from "./routing";


@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  imports: [
    SharedModule,
    QS_SharedRoutingModule,
  ],
  exports: [
    SharedModule,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class QS_SharedModule { }