import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take,map,tap } from 'rxjs';
import { AppService } from '../services';
import { isAuthed$ } from '../selectors';

@Injectable({providedIn:'root'})

export class AuthGuard implements CanActivate {
  constructor(
    private router:Router,
    private app:AppService){}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    return this.app.select(isAuthed$).pipe(
      take(1),
      tap(auth => console.log("auth guard is good to go",auth)),
      map(auth => {
        if(auth) return true;
        this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
        return false;
      }));
  }
}