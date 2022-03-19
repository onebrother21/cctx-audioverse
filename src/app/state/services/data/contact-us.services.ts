import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { AppService } from '../app';
import { ContactUsMsg } from '../../models';
import { contactUsMsgs } from '../../_data_api';
@Injectable({providedIn:'root'})

export class ContactUsService {
  ext = "/contact-us";
  constructor(private app:AppService){}
  fetch(){return of(contactUsMsgs);}//this.app.http.get<ContactUsMsg[]>("/");}
  fetchOne(username:string){return this.app.http.get<ContactUsMsg>("/"+username);}
  create(username:string){return this.app.http.post<ContactUsMsg>("/",{username});}
  update(id:string,updates:Partial<ContactUsMsg>){return this.app.http.put<ContactUsMsg>("/"+id,updates);}
  remove(id:string){return this.app.http.del("/"+id);}
}
