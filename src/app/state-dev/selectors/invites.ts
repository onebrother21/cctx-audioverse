import {createFeatureSelector,createSelector} from '@ngrx/store';
import {HCLInvitesState} from '../states';

export const invitesState$ = createFeatureSelector<HCLInvitesState>("invites");
export const invites$ = createSelector(invitesState$,s => s.items);
export const selectedInvite$ = createSelector(invites$,(s,i:number) => s.items[i]);
export const recentInvites$ = createSelector(invites$,s => s.filter(o => o.published));
export const errorInInvites$ = createSelector(invitesState$,s => s.error);
//export const featuredInvites$ = createSelector(invitesState$,s => s.items.filter(o => o.featured == true));
