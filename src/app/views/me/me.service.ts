import { Injectable } from "@angular/core";
import { AppService, User, UserJson } from "@state";
import {
  NavItem,Ad,Room,
  MeActions as ME,
  meLoading$,meErr$,meState$,
} from "@state";
import { Observable } from "rxjs";

@Injectable()
export class MeService {
  menu:NavItem[] = [
    {
      label:"Create New",
      text:"Types: Session, Room, Forum, Survey",
      link:"/sessions/new",
      type:`fa`,
      class:"fa fa-plus"
    },{
      label:"Recent Files",
      text:`Creamy Crack,\n Project Anywhere,\n 8 more`,
      link:"/sessions",
      type:`stack`,
    },{
      label:"Me Community",
      text:"See what's going on (eyeballs)...",
      link:"/me/hm2",
      type:"users",
    },{
      label:"Account and Settings",
      text:"View or update my account details.",
      link:"/me/acct",
      type:"lock",
    },{
      label:"Help & Support",
      text:"We're here to help",
      link:"/services",
      type:`fa`,
      class:"fa fa-question"
    }
  ];
  rooms:Room[] = [];
  ads:Ad[] = [
    {
      header:"I am an ad, please accidentally click me.",
      content:"Fames ac turpis egestas integer. Viverra orci sagittis eu volutpat odio. "
    },{
      header:"I am an ad, please accidentally click me.",
      content:"Fames ac turpis egestas integer. Viverra orci sagittis eu volutpat odio. "
    },{
      header:"I am an ad, please accidentally click me.",
      content:"Fames ac turpis egestas integer. Viverra orci sagittis eu volutpat odio. "
    },{
      header:"I am an ad, please accidentally click me.",
      content:"Fames ac turpis egestas integer. Viverra orci sagittis eu volutpat odio. "
    },
  ];
  loading$:Observable<boolean> = new Observable();
  error$:Observable<any> = new Observable();
  me$:Observable<UserJson> = new Observable();
  constructor(private app:AppService){
    this.loading$ = this.app.select(meLoading$);
    this.error$ = this.app.select(meErr$);
    this.me$ = this.app.select(meState$) as Observable<UserJson>;
  }
  send(o:Partial<User>){this.app.do(ME.update(o))}
}