import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { AppService } from '../app';
import { Layout } from '../../models';

@Injectable({providedIn:'root'})

export class LayoutsService {
  ext = "/layouts";
  constructor(private app:AppService){}
  fetchAll(){return this.app.http.get<Layout[]>(this.ext);}
  fetchLatest(){return this.app.http.get<Layout>(this.ext+"/latest");}
}
