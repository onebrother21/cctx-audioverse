import { Injectable } from "@angular/core";
import { AppService,authErr$,authExists$ } from "@state";
import {
  AuthenticationActions as AUTH,
  authLoading$,
  meState$,UserJson,
} from "@state";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Observable,
} from 'rxjs';

@Injectable()
export class AuthService {
  loading$:Observable<boolean> = new Observable();
  error$:Observable<any> = new Observable();
  me$:Observable<UserJson> = new Observable();
  userExists$:Observable<Record<string,boolean>|undefined> = new Observable();
  constructor(private app:AppService){
    this.loading$ = this.app.select(authLoading$);
    this.error$ = this.app.select(authErr$);
    this.me$ = this.app.select(meState$) as Observable<UserJson>;
    this.userExists$ = this.app.select(authExists$);
  }
  queryForExistingUser(prop:string,source:Observable<any>){
    source.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      filter(v => typeof v == "string"))
    .subscribe(v => this.app.do(AUTH.lookup({[prop]:v})));
  }
  send(action:string,o:any){
    switch(action){
      case "signout":this.app.do(AUTH.signout());break;
      case "signup":this.app.do(AUTH.signup(o));break;
      case "signin":this.app.do(AUTH.signin(o));break;
      case "verify":this.app.do(AUTH.verify(o));break;
      case "register":this.app.do(AUTH.register(o));break;
      case "register-ext":this.app.do(AUTH.registerExt(o));break;
      case "update-pin":this.app.do(AUTH.updatePin(o));break;
      case "login":this.app.do(AUTH.login(o));break;
      case "forgot":
      default:break;
    }
  }
}