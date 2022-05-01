import { Injectable } from '@angular/core';
import { AppService } from '../app';
import { StripeCardDetails,StripeTokenResp } from '../../models';
import { from,concatMap } from 'rxjs';
import { Payment } from '@api';

@Injectable({providedIn:'root'})
export class PaymentsService {
  ext = "/payments";
  constructor(private app:AppService){}
  charge(details:StripeCardDetails & {amount:number}) {
    const {amount,...card} = details;
    console.log({card,amount});
    return from(this.getToken(card)).pipe(
    concatMap(({status,response}) => {
      if(status === 200) return this.sendCharge(response.id as string,amount.toString());
      else throw response.error;
    }));
  }
  getToken(card:StripeCardDetails):Promise<StripeTokenResp> {
    return new Promise(done => {
      //(<any>window).Stripe.card.createToken(card,(status:number,response:any) => done({status,response}));
      done({status:200,response:{id:"strike-dummy-token"}});
    });
  }
  sendCharge(token:string,amount:string){
    const headers = new Headers({token,amount});
    return this.app.http.post<Payment>(this.ext+"/charge",{},headers);
  }
}