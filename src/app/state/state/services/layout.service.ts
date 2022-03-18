import { Injectable } from '@angular/core';
import { AppService } from '@state';
import { QS_Layout } from '../models';
import { tap } from 'rxjs/operators';


@Injectable({providedIn:'root'})

export class QS_LayoutService {
  ext = "/layout";
  constructor(private app:AppService){}
  fetch(){return this.app.http.get<QS_Layout>(this.ext);}
}
