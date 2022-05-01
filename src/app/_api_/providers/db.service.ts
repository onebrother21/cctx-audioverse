import { Injectable } from "@angular/core";
import { CommonUtils as Utils,Newable } from "../common";
import { initialDb } from "../db";

@Injectable({providedIn:"root"})
export class MockBackendDB<T> {
  name:string = "";
  ctr?:Newable<T>;
  constructor(){this.init();}
  private init = () => {Utils.isEmpty(this.__get())?this.__set(initialDb):null};
  private _new = (o?:any) => (this.ctr?new this.ctr(o||{}):o||{}) as T;
  private _arr = (model:T|T[]):model is T[] => Utils.isArr<T>(model);
  private __get = () => {
    const obj = localStorage.getItem("qs-db");
    return JSON.parse(obj||"{}");
  };
  __set = <T>(obj?:T) => localStorage.setItem("qs-db",JSON.stringify(obj));
  _get = () => this.__get()[this.name] as T|T[];
  _set = (obj:T|T[]) => this.__set({...this.__get(),[this.name]:obj});
  _load = () => {
    const model = this._get();
    return this._arr(model)?
    model.map(o_ => this._new(o_)):
    this._new(model);
  };
  add = (obj:T) => {
    let model = this._load();
    const instance = this._new(obj);
    this._arr(model)?model.push(instance):model = instance;
    this._set(model);
    return instance;
  };
  _save = (obj:T,i?:number) => {
    let model = this._load();
    const instance = this._new(obj);
    this._arr(model)?Utils.isNum(i)?model[i] = instance:null:model = instance;
    this._set(model);
    return instance;
  };
  _update = (upd:Partial<T>,prop:keyof T,val:any) => {
    let model = this._load();
    let instance = this._new();
    const update1 = (o:T) => {if(o) for(const k in upd) (o as any)[k] = upd[k as keyof T];return o;};
    const update2 = (o:T) => {instance = this._new(o);return instance;};
    const update_ = (o:T) => update2(update1(o));
    this._arr(model)?model.map(x => x[prop as keyof T] == val?update_(x):x):model = update_(model);
    this._set(model);
    return instance;
  };
  _remove = (prop:string,val:any) => {
    let model = this._load();let newModel:typeof model;
    this._arr(model)?
    newModel = model.filter(x => x[prop as keyof T] !== val):
    newModel = undefined as any;
    this._set(model);
    return {removed:true};
  };
  _find = (prop:keyof T|(keyof T)[],val:any|any[]):{o:T;i:number} => {
    let model = this._load();
    let i:number = -1;
    const find1 = (prop_:keyof T,val_:any) => i = i == -1?(model as T[]).findIndex(obj => obj[prop_] === val_):i;
    const find2 = (prop_:keyof T) => Array.isArray(val)?val.forEach(val_ => find1(prop_,val_)):find1(prop_,val);
    const find3 = () => Array.isArray(prop)?prop.forEach(prop_ => find2(prop_)):find2(prop);
    this._arr(model)?find3():null;
    return this._arr(model)?{o:model[i],i}:{o:model,i:0};
  };
}