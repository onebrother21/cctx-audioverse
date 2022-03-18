import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from "@shared";

import { REDUCERS } from "./reducers";
import { EFFECTS } from "./effects";

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature("qs",REDUCERS),
    EffectsModule.forFeature(EFFECTS),
  ],
})

export class QS_StateModule { }
export * from "./models";
export * from "./states";
export * from "./selectors";
export * from "./actions";
export * from "./effects";
export * from "./services";
export * from "./reducers";