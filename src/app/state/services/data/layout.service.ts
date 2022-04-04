import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { AppService } from '../app/app.service';
import { LayoutContent } from '../../models';

@Injectable({providedIn:'root'})

export class LayoutService {
  ext = "/layout";
  constructor(private app:AppService){}
  fetch(){return this.app.http.get<LayoutContent>(this.ext);}
}
