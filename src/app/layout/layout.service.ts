import { Injectable } from "@angular/core";
import { 
  AppService,
  LayoutsActions as LAYOUT,
  authed$,headerNav$,content$,
  LayoutParams,
  LayoutContent
} from '@state';
import { Observable, Subject } from "rxjs";

@Injectable()
export class LayoutService {
  isAuthed$:Observable<boolean>;
  headerNav$:Observable<LayoutParams|undefined>;
  content$:Observable<LayoutContent|undefined>;
  constructor(private app:AppService){
    this.isAuthed$ = this.app.load(authed$);
    this.headerNav$ = this.app.load(headerNav$);
    this.content$ = this.app.load(content$);
  }
  toggleMenu(outside?:boolean){this.app.do(LAYOUT.toggleNav(outside == undefined || !outside?undefined:false))}
}