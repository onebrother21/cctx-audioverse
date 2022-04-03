import { Injectable } from "@angular/core";
import { AppService, User } from "@state";
import {
  NavItem,Ad,Room,
  NavigationActions as Navigation,
  userLoading$,meState$,
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
  me$:Observable<Partial<User>> = new Observable();
  loading$:Observable<boolean> = new Observable();
  constructor(private app:AppService){
    this.loading$ = this.app.select(userLoading$);
    this.me$ = this.app.select(meState$);
  }
  send(o:any){this.app.do(Navigation.go({url:this.getNextMePage(o.type)}));}
  getNextMePage(type:string){
    switch(type){
      case "signup":return "/secur01/verify";
      case "verify":return "/secur01/register";
      case "register":return "/secur01/update-pin";
      case "signin":return "/secur01/login";
      case "update-pin":
      case "login":return "/user";
      default:return "/";
    }
  }
}