import {createFeatureSelector} from "@ngrx/store";
import {AppState} from "../states";

export const qs$ = createFeatureSelector<AppState>("qs");