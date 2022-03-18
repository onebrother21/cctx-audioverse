import {createFeatureSelector, createSelector} from "@ngrx/store";
import { TasksState } from "../states";

export const tasksState$ = createFeatureSelector<TasksState>("tasks");
export const tasks$ = createSelector(tasksState$,s => s.items);
export const selectedTask$ = createSelector(tasksState$,s => s.selected);
export const tasksLoading$ = createSelector(tasksState$,s => s.loading);
export const tasksErr$ = createSelector(tasksState$,s => s.error);