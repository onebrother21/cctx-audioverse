import { Injectable } from '@angular/core';
import { of,tap } from 'rxjs';

import { AppService } from '../app';
import { ContactUsMsg } from '../../models';
@Injectable({providedIn:'root'})

export class ContactUsService {
  ext = "/contact-us";
  constructor(private app:AppService){}
  fetch(){return this.app.http.get<ContactUsMsg[]>("/");}
  fetchOne(id:string){return this.app.http.get<ContactUsMsg>("/"+id);}
  send(o:ContactUsMsg){return this.app.http.post<ContactUsMsg>("/",o);}
}
