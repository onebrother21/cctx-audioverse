import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter, take, tap } from 'rxjs/operators';
import { AppService } from '../app';
import { sessions$ } from '../../selectors';

@Injectable()
export class DataLoadedGuard implements CanActivate {
  constructor(private app:AppService) { }
  waitForData():Observable<boolean> {
    return this.app.select(sessions$).pipe(
      map(sessionList => !!sessionList),
      filter(loaded => loaded),
      take(1),
      tap(() => console.log(0)));
    }
  canActivate():Observable<boolean>{return this.waitForData();}
}