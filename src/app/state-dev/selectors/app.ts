import {createSelector} from '@ngrx/store';
import {posts$} from "./posts";
import {games$} from './games';

export const recent$ = createSelector(posts$,games$,(posts,games) => [...posts,...games]);