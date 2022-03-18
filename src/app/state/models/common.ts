import { Entity,ErrorObj,ErrorConfig } from "./common-types";
import { longId } from './common-utils';

export interface AppEntity extends Entity {}
export class AppEntity {
  constructor(o:any){
    Object.assign(this,o);
    this.id = o.id || longId();
    this.created = new Date();}}
export interface DocEntity extends Entity {
  published:string|Date;
  content:string|string[];
  title:string;
  tags:string[];}
export class DocEntity extends AppEntity {
  constructor(o:any){
    super(o);
    this.published = new Date();
    this.content = o.content || "";
    this.tags = [];}}
export interface AppError extends ErrorObj {}
export class AppError extends Error {
  constructor(o:string|Error|ErrorConfig){
    let _o:Partial<AppError> = {};
    if(typeof o === "string"){super(o);}
    else if(o instanceof Error){super(o.message);_o.name = o.name;}
    else {
      super(o.msg || "The data provided is not valid");
      _o = {...o};}
    //if(Error.captureStackTrace){Error.captureStackTrace(this,AppError);}
    Object.assign(this,new AppEntity({}),{status:500,info:{}},_o);}
  json(){
    const {id,name,message,status,code,errors,warning,info,stack,created} = this;
    return {id,name,message,status,code,errors,warning,info,stack,created};
  }
}