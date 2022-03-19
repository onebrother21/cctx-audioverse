import {createFeatureSelector,createSelector} from '@ngrx/store';
import {RouterState,NavigationState} from '../states';

export const router$ = createFeatureSelector<RouterState>("router");
export const route$ = createSelector(router$,s => s?s.state:{});
export const navigation$ = createFeatureSelector<NavigationState>("navigation");
export const navigationErr$ = createSelector(navigation$,s => s.error);
export const history$ = createSelector(navigation$,s => s.history);
export const requestedUrl$ = createSelector(navigation$,s => s.requested);