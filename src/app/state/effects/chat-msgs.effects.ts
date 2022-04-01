import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError } from "rxjs/operators";

import { ChatMsg } from "../models";
import { ChatMessagesActions as CHAT } from "../actions";
import { AppService,ChatMessagesService } from "../services";

@Injectable()
export class ChatMessagesEffects {
  constructor(
    private actions$:Actions,
    private msgs:ChatMessagesService,
    private app:AppService){}
  fetchChatMsgs$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CHAT.fetch),
    mergeMap(() => this.msgs.fetch().pipe(
      map(msgs => CHAT.load(msgs)),
      catchError(error => of(CHAT.error(error)))))));
  SendChatMsg$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CHAT.send),
    map(o => o.payload),
    mergeMap(o => this.msgs.send(o).pipe(
      map((msg:ChatMsg) => CHAT.loadOne(msg)),
      catchError(error => of(CHAT.error(error)))))));
}