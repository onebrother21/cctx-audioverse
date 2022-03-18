import { Injectable } from "@angular/core";
import { Icon } from '@state';
import { Subject } from "rxjs";

@Injectable()
export class LayoutService {
  private servicesAction = new Subject<any>();
  servicesAction$ = this.servicesAction.asObservable();
  send(change:any){this.servicesAction.next(change);}
  menu:Icon[] = [
    {
      label:"FAQ",
      text:"Got a question? Check here first.",
      url:"/qs/services/faq",
      type:"fa",
      class:"fa fa-question-circle"
    },{
      label:"Live Chat",
      text:"Chat with our support team now...",
      url:"/qs/services/chat",
      type:"fa",
      class:"fa fa-comment-dots"
    },{
      label:"Contact Us",
      text:"Our customer support is here for you.",
      url:"/qs/services/contact",
      type:"fa",
      class:"fa fa-envelope"
    },
  ];
}