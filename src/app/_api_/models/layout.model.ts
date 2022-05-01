import { AppEntity,Strings,Enum,AppNavItem } from '../common';

export type LayoutContent = {text:Strings;menus:Enum<AppNavItem[],string>;};
export type LayoutParams = {open?:boolean;};
export type Pagination = {
  current:number;
  total:number;
  next?:string;
  prev?:string;
};
export interface Layout extends AppEntity {
  header:LayoutParams;
  footer:LayoutParams;
  main:LayoutParams;
  nav:LayoutParams;
  content?:LayoutContent;
  pagination?:Pagination;
}
export class Layout extends AppEntity {json(){return{...this};}}