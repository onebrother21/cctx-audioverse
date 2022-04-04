import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AppService } from '../app/app.service';
import { Business, BusinessJson } from '../../models';


@Injectable({providedIn:'root'})
export class BusinessesService {
  ext = "/businesses";
  constructor(private app:AppService){}
  fetch(){return this.app.http.get<BusinessJson[]>(this.ext);}
  fetchOne(businessName:string){return this.app.http.get<BusinessJson>(this.ext+"/"+businessName);}
  create(o:{businessName:string}){return this.app.http.post<BusinessJson>(this.ext,o);}
  update(id:string,updates:Partial<Business>){return this.app.http.put<BusinessJson>(this.ext+"/"+id,updates);}
  remove(id:string){return this.app.http.del(this.ext+"/"+id);}
}