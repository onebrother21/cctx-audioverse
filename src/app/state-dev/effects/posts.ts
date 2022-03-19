import { Injectable } from '@angular/core';
import { Actions,createEffect,ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError,map,mergeMap,tap,withLatestFrom,filter } from 'rxjs/operators';

import { AppError } from "../types";
import { HCLPostsActions as HCLPosts,NavigationActions as Navigation } from '../actions';
import { HCLPostsService,AppService } from "../services";
import { HCLPost,FeatureTag } from '../models';
import { posts$,tags$ } from "../selectors";
import { AppError } from '@onebro/ob-common';

@Injectable()
export class HCLPostsEffects {
  constructor(
    private posts:HCLPostsService,
    private action$:Actions,
    private app:AppService){}
  FetchRecent$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLPosts.fetchRecent),
    withLatestFrom(this.app.select(tags$)),
    map(([,tags]) => tags as FeatureTag[]),
    mergeMap(tags =>
      this.posts.fetchRecent().pipe(
        map(posts => this.mapFeatureTags(posts,tags)),
        map(posts => HCLPosts.load(posts)),
        catchError(error => {
          console.error(error);
          return of(HCLPosts.error(new AppError(error)));}
        )))));
  FetchPosts$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLPosts.fetch),
    withLatestFrom(this.app.select(tags$)),
    map(([,tags]) => tags as FeatureTag[]),
    mergeMap(tags =>
      this.posts.fetch().pipe(
        map(posts => this.mapFeatureTags(posts,tags)),
        map(posts => HCLPosts.load(posts)),
        catchError(error => of(HCLPosts.error(new AppError(error))))))));
  CreatePost$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLPosts.create),
    map(action => action.post),
    mergeMap(post =>
      this.posts.create(post).pipe(
        map((post:HCLPost) => HCLPosts.loadOne(post)),
        catchError(error => of(HCLPosts.error(new AppError(error))))))));
  UpdatePost$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLPosts.update),
    map(action => action.post),
    mergeMap(post =>
      this.posts.update(post.id,post).pipe(
        map((post:HCLPost) => HCLPosts.loadOne(post)),
        catchError(error => of(HCLPosts.error(new AppError(error))))))));
  RemovePost$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLPosts.remove),
    map(action => action.id),
    mergeMap(id =>
      this.posts.remove(id).pipe(
        map(deleted => HCLPosts.unloadOne(deleted.id)),
        catchError(error => of(HCLPosts.error(new AppError(error))))))));
  SelectPostOnNavigation$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(Navigation.updateHistory),
    map(action => action.route),
    filter(({url}) => url.indexOf('/posts') > -1),
    withLatestFrom(this.app.load(posts$)),
    filter(([{params}]) => params && params.slug),
    filter(([{params},posts]) => posts.findIndex(o => o.slug == params.slug) < 0),
    map(([{url}]) => Navigation.pageNotFound(url))));
  mapFeatureTags(posts:HCLPost[],tags:FeatureTag[]){
    const filter = t => tags.find(_t => _t.label == t);
    const arr = posts.map(p => ({...p,tags:tags.map(t => filter(t))})) as HCLPost[];
    return arr;
  }
}