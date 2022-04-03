import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take,map,tap } from 'rxjs';
import { AppService } from '../services';
import { authed$ } from '../selectors';
import { NavigationActions as NAV} from "../actions";

@Injectable({providedIn:'root'})
export class NoAuthGuard implements CanActivate {
  constructor(private app:AppService){}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    return this.app.select(authed$).pipe(
      take(1),
      //tap(auth => console.log("no auth guard is good to go",!auth)),
      map(auth => {
        if(!auth) return true;
        this.app.do(NAV.go({url:'/me'}));
        return false;
      }));
  }
}