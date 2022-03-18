import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError } from "rxjs/operators";

import { AppError,AppService } from "@state";
import { QS_ChatMsg } from "../models";
import { QS_ChatMessagesActions as CHAT } from "../actions";
import { QS_ChatMessagesService } from "../services";

@Injectable()
export class QS_ChatMessagesEffects {
  constructor(
    private actions$:Actions,
    private msgs:QS_ChatMessagesService,
    private app:AppService){}
  fetchQS_ChatMsgs$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CHAT.fetch),
    mergeMap(() => this.msgs.fetch().pipe(
      map((msgs:QS_ChatMsg[]) => CHAT.load(msgs)),
      catchError(error => of(CHAT.error(new AppError(error))))))));
  SendQS_ChatMessages$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CHAT.send),
    map(o => o.payload),
    mergeMap(o => this.msgs.send(o).pipe(
      map((msg:QS_ChatMsg) => CHAT.loadOne(msg)),
      catchError(error => of(CHAT.error(new AppError(error))))))));
}