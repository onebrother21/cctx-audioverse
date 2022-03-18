import { Injectable } from "@angular/core";
import { AppService } from "@state";
import {
  Icon,Ad,Room,
  NavigationActions as Navigation,
  userLoading$,
} from "@state";
import { Observable } from "rxjs";

@Injectable()
export class MeService {
  menu:Icon[] = [
    {
      label:"Create New",
      text:"Types: Session, Room, Forum, Survey",
      url:"/sessions/new",
      type:`fa`,
      class:"fa fa-plus"
    },{
      label:"Recent Files",
      text:`Creamy Crack,\n Project Anywhere,\n 8 more`,
      url:"/sessions",
      type:`stack`,
    },{
      label:"Me Community",
      text:"See what's going on (eyeballs)...",
      url:"/me/hm2",
      type:"users",
    },{
      label:"Account and Settings",
      text:"View or update my account details.",
      url:"/me/acct",
      type:"lock",
    },{
      label:"Help & Support",
      text:"We're here to help",
      url:"/services",
      type:`fa`,
      class:"fa fa-question"
    }
  ];
  rooms:Room[] = [
    {
      id:'01',
      name:"smokebaby",
      rank:29,
      users:["DJ Monarch"],
      duration:"6 hrs, 5 min",
      viewCt:1112,
      commentCt:56,
      img:"she-on-fireree.jpg",
      vid:"20211126_213747.mp4",
      created:new Date(),
    },{
      id:'02',
      name:"big chillin",
      rank:59,
      users:["Jackswift"],
      duration:"58 min",
      viewCt:1112,
      commentCt:56,
      img:"Biggie-in-the-studio.jpg",
      vid:"20211126_213833.mp4",
      created:new Date(),
    },{
      id:'03',
      name:"advanced flex",
      rank:59,
      users:["Jackswift","AshBeeee"],
      duration:"37 min",
      viewCt:1112,
      commentCt:56,
      img:"studio-1.jpeg",
      vid:"20220304_225731.mp4",
      created:new Date(),
    },{
      id:'04',
      name:"fiesty freestyle",
      rank:59,
      users:["BreezeAwesome","Two Chains"],
      duration:"16 hrs, 52 min",
      viewCt:1112,
      commentCt:56,
      img:"JAMMING.jpg",
      vid:"20211126_213747.mp4",
      created:new Date(),
    },{
      id:'05',
      name:"two more hits",
      rank:59,
      users:["AshBeeee"],
      duration:"1 hr, 20 min",
      viewCt:1112,
      commentCt:56,
      img:"How-to-Start-a-Band.jpg",
      vid:"20211126_213833.mp4",
      created:new Date(),
    },{
      id:'06',
      name:"the bar room, V2",
      rank:59,
      users:["SouthSide Slug"],
      duration:"18 min",
      viewCt:1112,
      commentCt:56,
      img:"apricot-jam.jpg",
      vid:"20220304_225731.mp4",
      created:new Date(),
    },
  ];
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
  loading:Observable<boolean> = new Observable();
  constructor(private app:AppService){this.loading = this.app.select(userLoading$);}
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