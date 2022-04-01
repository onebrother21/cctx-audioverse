import { Injectable } from "@angular/core";
import { 
  AppService,
  LayoutActions as LAYOUT,
  isAuthed$,headerNav$,
  Icon,
  LayoutParams
} from '@state';
import { Observable, Subject } from "rxjs";

@Injectable()
export class LayoutService {
  isAuthed$:Observable<boolean>;
  headerNav$:Observable<LayoutParams>;
  constructor(private app:AppService){
    this.isAuthed$ = this.app.select(isAuthed$);
    this.headerNav$ = this.app.select(headerNav$);
  }
  toggleMenu(outside?:boolean){this.app.do(LAYOUT.toggleNav(outside == undefined || !outside?undefined:false))}
}