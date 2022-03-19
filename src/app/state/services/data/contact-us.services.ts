import { Injectable } from '@angular/core';
import { of,tap } from 'rxjs';

import { AppService } from '../app';
import { ContactUsMsg } from '../../models';
import { contactUsMsgs } from '../../_data_api';
@Injectable({providedIn:'root'})

export class ContactUsService {
  ext = "/contact-us";
  constructor(private app:AppService){}
  fetch(){return of(contactUsMsgs);}//this.app.http.get<ContactUsMsg[]>("/");}
  fetchOne(id:string){return this.app.http.get<ContactUsMsg>("/"+id);}
  send(o:ContactUsMsg){return this.app.http.post<ContactUsMsg>("/",o);}
}
