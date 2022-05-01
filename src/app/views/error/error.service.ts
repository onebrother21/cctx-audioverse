import { Injectable } from "@angular/core";
import { AppService } from "@state";
import { Subject } from "rxjs";

@Injectable()
export class ErrorService {
  private homeAction = new Subject<any>();
  homeAction$ = this.homeAction.asObservable();
  send(change:any){this.homeAction.next(change);}
  constructor(private app:AppService){}
}