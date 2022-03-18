import { Injectable } from '@angular/core';
import { AppService } from '@state';
import { QS_ContactUsMsg } from '../models';
import { tap } from 'rxjs/operators';


@Injectable({providedIn:'root'})

export class QS_ContactUsService {
  ext = "/contact-us";
  constructor(private app:AppService){}
  fetch(){return this.app.http.get<QS_ContactUsMsg[]>();}
  send(o:QS_ContactUsMsg){return this.app.http.post<QS_ContactUsMsg>(this.ext,o);}
}
