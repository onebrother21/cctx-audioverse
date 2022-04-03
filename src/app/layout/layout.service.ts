import { Injectable } from "@angular/core";
import { 
  AppService,
  LayoutActions as LAYOUT,
  authed$,headerNav$,content$,
  LayoutParams,
  LayoutContent
} from '@state';
import { Observable, Subject } from "rxjs";

@Injectable()
export class LayoutService {
  isAuthed$:Observable<boolean>;
  headerNav$:Observable<LayoutParams>;
  content$:Observable<LayoutContent|undefined>;
  constructor(private app:AppService){
    this.isAuthed$ = this.app.select(authed$);
    this.headerNav$ = this.app.select(headerNav$);
    this.content$ = this.app.select(content$);
  }
  toggleMenu(outside?:boolean){this.app.do(LAYOUT.toggleNav(outside == undefined || !outside?undefined:false))}
}