import { Injectable } from "@angular/core";
import {
  AppService,
  LayoutContent,
  User,
  UserJson,
  MeActions as ME,
  content$,meLoading$,meErr$,me$,
} from "@state";
import { Observable } from "rxjs";

@Injectable()
export class MeService {
  loading$:Observable<boolean> = new Observable();
  error$:Observable<any> = new Observable();
  me$:Observable<UserJson> = new Observable();
  content$:Observable<LayoutContent|undefined>;
  constructor(private app:AppService){
    this.loading$ = this.app.load(meLoading$);
    this.error$ = this.app.load(meErr$);
    this.me$ = this.app.load(me$) as Observable<UserJson>;
    this.content$ = this.app.load(content$);
  }
  send(o:Partial<User>){this.app.do(ME.update(o));}
}