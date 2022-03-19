import { HttpRequest,HttpHandler} from '@angular/common/http';
import { Post } from '@state';
import { longId,AppError,slugify } from '@onebro/ob-common';
import { ok,isLoggedIn,idFromUrl,findone,save,add,errors as e } from '../utils';
import { db } from '../db';

export const postsController = (request:HttpRequest<any>,next:HttpHandler) => {
  const {url,method,headers,body} = request;
  const POSTS = {
    create:() => {
      const newpost = body as Post;
      add("hcl-posts",db.posts,{...newpost,slug:slugify(newpost.title)});
      return ok();},
    fetch:() => /*!isLoggedIn(headers)?unauthorized():*/ok(db.posts),
    fetchRecent:() => /*!isLoggedIn(headers)?unauthorized():*/ok(db.recent),
    fetchBySlug:() => {
      return isLoggedIn(headers)?e["unauthorized"]():
      ok(db.posts.find(o => o.slug == idFromUrl(url)));},
    update:() => {
      if (!isLoggedIn(headers)) return e["unauthorized"]();
      let {o,i} = findone(db.posts,"id",idFromUrl(url));
      save("hcl-posts",db.posts,{...o,...body},i);
      return ok();},
    remove:() => {
      if (!isLoggedIn(headers)) return e["unauthorized"]();
      db.posts = db.posts.filter(x => x.id !== idFromUrl(url));
      save("hcl-posts",db.posts);
      return ok();}};
  switch(true){
    case url.endsWith('/posts') && method === 'POST':return POSTS.create();
    case url.endsWith('/posts') && method === 'GET':return POSTS.fetch();
    case url.endsWith('/posts/recent') && method === 'GET':return POSTS.fetchRecent();
    case url.match(/\/posts\/\w+$/) && method === 'GET':return POSTS.fetchBySlug();
    case url.match(/\/posts\/\w+$/) && method === 'PUT':return POSTS.update();
    case url.match(/\/posts\/\w+$/) && method === 'DELETE':return POSTS.remove();
    default:return e["fourohfour"]();
  }
};