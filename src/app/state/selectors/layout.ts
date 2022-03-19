import {createFeatureSelector,createSelector} from '@ngrx/store';
import {LayoutState} from '../states';

export const layout$ = createFeatureSelector<LayoutState>("layout");
export const header$ = createSelector(layout$,s => s.header);
export const sidebar$ = createSelector(layout$,s => s.sidebar);
export const footer$ = createSelector(layout$,s => s.footer);
export const pagination$ = createSelector(layout$,s => s.pagination);

export const headerMenu$ = createSelector(header$,s => s.menu);
export const sidebarMenu$ = createSelector(sidebar$,s => s.menu);
export const sidebarOpen$ = createSelector(sidebar$,s => s.open);
export const footerOpen$ = createSelector(sidebar$,s => s.open);
export const copy$ = createSelector(footer$,s => s.copy);
