import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { PIPES } from "./pipes";
import { PROVIDERS } from "./providers";
import { SharedRoutingModule } from "./routing";


@NgModule({
  declarations: [...PIPES],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...PIPES,
  ],
  providers: [...PROVIDERS]
})
export class SharedModule { }
export * from "./validators";