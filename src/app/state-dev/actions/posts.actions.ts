import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { Post } from '../models';

export const PostsActions = {
  fetch:createAction('@qs/posts/fetch'),
  fetchRecent:createAction('@qs/posts/fetch/recent'),
  create:createAction('@qs/posts/create',(o:Post) => ({payload:o})),
  update:createAction('@qs/posts/update',(o:Post) => ({payload:o})),
  remove:createAction('@qs/posts/remove',(o:string) => ({payload:o})),
  select:createAction('@qs/posts/select',(o:string) => ({payload:o})),
  load:createAction('@qs/posts/load/recent',(o:Post[]) => ({payload:o})),
  loadOne:createAction('@qs/posts/load',(o:Post) => ({payload:o})),
  unloadOne:createAction('@qs/posts/unload',(o:string) => ({payload:o})),
  error:createAction('@qs/posts/error',(o:AppError) => ({payload:o})),
};