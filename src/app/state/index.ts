import { NgModule } from '@angular/core';

import { StoreModule,MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule,RouterStateSerializer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment as env } from '@env/environment';

import { UrlSerializer } from '@angular/router';
import { REDUCERS } from "./reducers";
import { EFFECTS } from "./effects";
import { AppRouterUrlSerializer,AppRouterStateSerializer } from "./services";
import { AppState } from './states';

export const metaReducers:MetaReducer<AppState>[] = !env.prod?[storeFreeze]:[];

@NgModule({
  imports: [
    StoreModule.forRoot(REDUCERS,{metaReducers}),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot(EFFECTS),
    !env.prod?StoreDevtoolsModule.instrument({maxAge:25}):[],
  ],
  providers: [
    {provide:UrlSerializer,useClass:AppRouterUrlSerializer},
    {provide:RouterStateSerializer,useClass:AppRouterStateSerializer},
  ]
})

export class AppStateModule { }
export * from "./models";
export * from "./states";
export * from "./selectors";
export * from "./actions";
export * from "./effects";
export * from "./services";
export * from "./reducers";
export * from "./common";