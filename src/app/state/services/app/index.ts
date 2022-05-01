import { Store,select,Action,Selector } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppLocalStorageService } from "./local-storage.service";
import { AppWindowService } from "./window.service";
import { AppHttpService} from "./http.service";
import { AppAlertsService } from "./alerts.service";
import { AppState } from "../../states";
import { Router } from '@angular/router';

@Injectable({providedIn:"root"})
export class AppService {
  constructor(
    private store:Store<AppState>,
    public local:AppLocalStorageService,
    public win:AppWindowService,
    public http:AppHttpService,
    public alerts:AppAlertsService,
    public router:Router,
  ){}
  go(url:string,extras?:any){extras?this.router.navigate([url,extras]):this.router.navigateByUrl(url);}
  do(a:Action){return this.store.dispatch(a);}
  load<V>(s:Selector<AppState,V>){return this.store.pipe(select(s));}
}
//export * from "./tesseract";