import { Store,select,Action,Selector } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppLocalStorageService } from "./local-storage.service";
import { AppWindowService } from "./window.service";
import { AppHttpService} from "./http.service";
import { AppAlertsService } from "./alerts.service";
import { AppState } from "../../states";

@Injectable({providedIn:"root"})
export class AppService {
  constructor(
    private store:Store<AppState>,
    public local:AppLocalStorageService,
    public win:AppWindowService,
    public http:AppHttpService,
    public alerts:AppAlertsService){}
  do(a:Action){return this.store.dispatch(a);}
  select<V>(s:Selector<AppState,V>){return this.store.pipe(select(s));}
  load = this.store.select;
}
//export * from "./tesseract";