import { Injectable } from "@angular/core";
import {
  SessionComment,
} from "@qs-state";
import { Observable, Subject } from "rxjs";

@Injectable()
export class SessionsCommentsService {
  private newComment = new Subject<SessionComment>();
  newComment$ = this.newComment.asObservable();
  msgs:string[] = [
    "Ten random sentences",
    "Um, water the plant",
    "I'm glad it's getting warmer",
    "I'm cleaning my room",
    "I'm making my bed",
    "Think of something that's something you're doing",
    "Let me fluff my pillows",
    "I like having a phone",
    "I dont know yet",
    "The heater is blowing hot air",
    "And so are u",
  ];
  authors:string[] = [
    "Mia","Jack","Terry","Sussie","BreezeAwesome",
    "DavidDavidDavid","Brenda","Felicia","Linda","Leticia",
    "Dawn","Arnez","Yolanda","Wanda"
  ];
  send(o:SessionComment){
    this.newComment.next(o);
    //this.app.do(Navigation.go(o));
  }
  randomIntFromInterval(min:number,max:number){return Math.floor(Math.random() * (max - min + 1) + min);}
  addRandomComment(){
    const times = [1000,2000,3000,4000];
    const rndMsg = this.randomIntFromInterval(0,this.msgs.length - 1);
    const rndAuthor = this.randomIntFromInterval(0,this.authors.length - 1);
    const rndTime = this.randomIntFromInterval(0,times.length - 1);
    const comment = {user:this.authors[rndAuthor],body:this.msgs[rndMsg]};
    const delay = times[rndTime];
    this.newComment.next(comment as SessionComment);
    setTimeout(() => this.addRandomComment(),delay);
  }
}