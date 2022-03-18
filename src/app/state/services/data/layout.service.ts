import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { AppService } from '@state';
import { Layout } from '../models';

@Injectable({providedIn:'root'})

export class LayoutService {
  ext = "/layout";
  constructor(private app:AppService){}
  fetch(){return this.app.http.get<Layout>(this.ext);}
}
