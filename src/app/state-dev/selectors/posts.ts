import {createFeatureSelector,createSelector} from '@ngrx/store';
import {HCLPostsState} from '../states';

export const postsState$ = createFeatureSelector<HCLPostsState>("posts");
export const posts$ = createSelector(postsState$,s => s.items);
export const selectedPost$ = createSelector(posts$,(s,{i}) => s[i as number]);
export const recentPosts$ = createSelector(posts$,s => s.filter(o => o.published));
export const featuredPosts$ = createSelector(posts$,s => s.filter(o => o.featured == true));
export const errorInPosts$ = createSelector(postsState$,s => s.error);