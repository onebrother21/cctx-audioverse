import {createFeatureSelector} from "@ngrx/store";
import {QS_State} from "../states";

export const qs$ = createFeatureSelector<QS_State>("qs");