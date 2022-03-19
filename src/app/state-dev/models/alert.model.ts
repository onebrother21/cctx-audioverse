import { DocEntity } from "../types";

export type AppAlertType = "success"|"error"|"confirm"|"info";
export type AppAlertCss = 'alert alert-success'|'alert alert-danger'|'alert alert-info';
export type AppAlertConfig = {
  type:AppAlertType;
  msg:string;
  kind?:string;
  confirm?:boolean;
  confirmed?:string|Date;
  important?:boolean;
};
export interface AppAlert extends DocEntity,AppAlertConfig {class?:AppAlertCss;}
export class AppAlert extends DocEntity {
  constructor(o:AppAlertConfig){
    super(o);
    switch(this.type){
      case 'success':this.class = "alert alert-success";break;
      case "error":this.class = "alert alert-danger";break;
      default:this.class = "alert alert-info";break;
    }
  }
}