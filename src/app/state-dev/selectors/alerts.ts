import {createFeatureSelector,createSelector} from '@ngrx/store';
import {AlertsState} from '../__state/states';

export const alerts$ = createFeatureSelector<AlertsState>("alerts");
export const alert$ = createSelector(alerts$,s => s.alert);
export const confirm$ = createSelector(alert$,s => s.confirm);
export const keepAlertAfterNav$ = createSelector(alerts$,s => s.keepAfterNav);