import { NavItem } from "./navigation.model";

export type LayoutParams = {open?:boolean;menus?:NavItem[][];};
export type LayoutHeader = LayoutParams;
export type LayoutHeaderNav = LayoutParams;
export type LayoutFooter = LayoutParams & {copy:string;};
export type LayoutMainView = LayoutParams;
export type Pagination = {
  current:number;
  total:number;
  next?:string;
  prev?:string;
};
export type Layout = {
  header:LayoutHeader;
  footer:LayoutFooter;
  nav:LayoutHeaderNav;
  main:LayoutMainView;
  pagination?:Pagination;
};
export type Icon = {
  label:string;
  type:string;
  text?:string;
  url?:string
  class?:string;
};