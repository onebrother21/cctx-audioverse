export {};
/*
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AppService } from '../services';
import { Observable } from 'rxjs';
import { map, filter, take, tap } from 'rxjs/operators';

@Injectable()
export class DataLoadedGuard implements CanActivate {
  constructor(private app:AppService) { }
  waitForData():Observable<boolean> {
    return this.app.select(state => state.contracts).pipe(
      map(contractList => !!contractList),
      filter(loaded => loaded),
      take(1),
      tap(() => console.log(0)));
    }
  canActivate():Observable<boolean>{return this.waitForData();}
}
*/