import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType,OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError,switchMap } from "rxjs/operators";

import { AppError } from "../types";
import { User } from "../models";
import { MeActions as ME } from "../actions";
import { AppService,MeService } from "../services";

@Injectable()
export class MeEffects implements OnInitEffects {
  constructor(
    private actions$:Actions,
    private user:MeService,
    private app:AppService){}
  ngrxOnInitEffects():Action {return ME.populate();}
  PopulateUser$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ME.populate),
    map(() => this.user.populate()),
    map((user:User) => ME.load(user)),
    catchError(error => of(ME.error(new AppError(error))))));
  saveUser$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ME.load),
    tap(o => this.user.save(o.payload))),{dispatch:false});
}