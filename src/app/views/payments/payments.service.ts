import { Injectable } from "@angular/core";
import {
  AppService,
  paymentsErr$,
  PaymentsActions as PAY,
  paymentsLoading$,
  me$,UserJson, StripeCardDetails,
} from "@state";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Observable,
} from 'rxjs';

@Injectable()
export class PaymentsService {
  loading$:Observable<boolean> = new Observable();
  error$:Observable<any> = new Observable();
  me$:Observable<UserJson> = new Observable();
  userExists$:Observable<Record<string,boolean>|undefined> = new Observable();
  constructor(private app:AppService){
    this.loading$ = this.app.load(paymentsLoading$);
    this.error$ = this.app.load(paymentsErr$);
    this.me$ = this.app.load(me$) as Observable<UserJson>;
    //this.userExists$ = this.app.load(authExists$);
  }
  send(o:StripeCardDetails & {amount:number}){this.app.do(PAY.charge(o));}
}