import {createSelector} from "@ngrx/store";
import {qs$} from "./app.selectors";

export const tasksState$ = createSelector(qs$,s => s.tasks);
export const tasks$ = createSelector(tasksState$,s => s.items);
export const selectedTask$ = createSelector(tasksState$,s => s.selected);
export const tasksLoading$ = createSelector(tasksState$,s => s.loading);
export const tasksErr$ = createSelector(tasksState$,s => s.error);