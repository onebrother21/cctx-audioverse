import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { CommonUtils as Utils } from '../common';
import {
  MockBackendDB,
  MockBackendHandlers,
  MockBackendLogger,
  MockBackendNotifier
} from '../providers';
import { Payment } from '../models';

@Injectable({providedIn:"root"})
export class PaymentsController extends MockBackendDB<Payment> {
  constructor(private handlers:MockBackendHandlers,private notifier:MockBackendNotifier){
    super();
    this.name = "payments";
    this.ctr = Payment;
  }
  charge = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const confirmation = Utils.shortId().toLocaleUpperCase();
    const o = new Payment({
      ...body,
      confirmation,
    });
    this.add(o);
    setTimeout(() => this.notifier.send("paymentCharge",o.confirmation as string),500);
    return this.handlers.ok(o.json());
  };
}