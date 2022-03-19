import {createFeatureSelector,createSelector} from '@ngrx/store';
import {HCLContentState} from '../states';

export const content$ = createFeatureSelector<HCLContentState>("content");
export const blog$ = createSelector(content$,s => s.blog);
export const about$ = createSelector(content$,s => s.about);
export const sharing$ = createSelector(content$,s => s.sharing);
export const tags$ = createSelector(content$,s => s.tags);
export const board$ = createSelector(content$,s => s.board);
export const social$ = createSelector(blog$,s => s.social);
export const leaders$ = createSelector(content$,s => s.leaders);
export const stats$ = createSelector(content$,s => s.stats);