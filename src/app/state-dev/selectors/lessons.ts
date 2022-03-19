import {createFeatureSelector,createSelector} from '@ngrx/store';
import {HCLLessonsState} from '../states';

export const lessonsState$ = createFeatureSelector<HCLLessonsState>("lessons");
export const lessons$ = createSelector(lessonsState$,s => s.items);
export const selectedLesson$ = createSelector(lessons$,(s,i:number) => s.items[i]);
export const recentLessons$ = createSelector(lessons$,s => s.filter(o => o.published));
export const errorInLessons$ = createSelector(lessonsState$,s => s.error);