import { Params, Data } from "@angular/router";

export type AppRoute = {url:string;} & Partial<{
  query:Params;
  params:Params;
  data:Data;
}>;
export type NavItem = Partial<{
  link:string;
  label:string;
  title:string;
  class:string;
  icon:string;
  img:string;
  menu:NavItem[];
}>;