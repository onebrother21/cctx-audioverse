import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { AppService } from '../app';
import { ContactUsMsg } from '../../models';

@Injectable({providedIn:'root'})

export class ContactUsService {
  ext = "/contact-us";
  constructor(private app:AppService){}
  fetch(){return this.app.http.get<ContactUsMsg[]>();}
  send(o:ContactUsMsg){return this.app.http.post<ContactUsMsg>(this.ext,o);}
}
