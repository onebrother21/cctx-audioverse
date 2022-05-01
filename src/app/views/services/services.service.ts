import { Injectable } from "@angular/core";
import { AppService,LayoutContent,content$ } from '@state';
import { Observable } from "rxjs";

@Injectable()
export class ServicesService {
  content$:Observable<LayoutContent|undefined>;
  constructor(private app:AppService){
    this.content$ = this.app.load(content$);
  }
}