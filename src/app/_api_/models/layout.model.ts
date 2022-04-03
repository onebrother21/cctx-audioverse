import { Params,Data } from "@angular/router";
import { Strings,Enum } from '../common';

export type AppRoute = {url:string;} & Partial<{query:Params;params:Params;data:Data;}>;
export type NavItem = Partial<{
  label:string;
  type:string;
  link:string;
  text:string;
  class:string;
  icon:string;
  img:string;
  menu:NavItem[];
}>;
export type LayoutContent = {text:Strings;menus:Enum<NavItem[],string>;};
export type LayoutParams = {open?:boolean;};
export type Pagination = {
  current:number;
  total:number;
  next?:string;
  prev?:string;
};
export type Layout = {
  header:LayoutParams;
  footer:LayoutParams;
  main:LayoutParams;
  nav:LayoutParams;
  content?:LayoutContent;
  pagination?:Pagination;
};