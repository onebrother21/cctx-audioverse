import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take,map,tap } from 'rxjs';
import { AppService } from '../services';
import { authed$ } from '../selectors';
import { NavigationActions as NAV} from "../actions";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate {
  constructor(private app:AppService){}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    return this.app.select(authed$).pipe(
      take(1),
      //tap(auth => console.log("auth guard is good to go",auth)),
      map(auth => {
        if(auth) return true;
        this.app.do(NAV.go({url:'/secur01/signin',query:{returnUrl:state.url}}));
        return false;
      }));
  }
}