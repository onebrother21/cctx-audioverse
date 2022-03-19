import { Store,select,Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { 
  AppLocalStorageService,
  AppLoggingService,
  AppGlobalsService,
  AppWindowService,
  AppHttpService,
  AppErrorHandler
} from './common';
import { AppState } from "../states";

@Injectable({providedIn:"root"})
export class AppService {
  constructor(
    private store:Store<AppState>,
    public S:AppLocalStorageService,
    public L:AppLoggingService,
    public U:AppGlobalsService,
    public W:AppWindowService,
    public H:AppHttpService,
    public E:AppErrorHandler,
  ){}
  do(a){return this.store.dispatch(a);}
  select(s){return this.store.pipe(select(s));}
  load = this.store.select;
}