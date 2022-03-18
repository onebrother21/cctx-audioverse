export type Constructor<T> = new (...args:any[]) => T;
export type Keys<T> = keyof T;
export type Method<T> = (...params:any[]) => T;
export type TypedMethod<T,U> = (...params:(T|any)[]) => U;
export type Callback<T> = (v:T) => void;
export type AsyncCallback<T> = (v:T) => Promise<void>;
export type Members<T> = {[k in Keys<T>]:T[k]};
export type Member<T> = Partial<T>;
export type Payload<T,K extends Keys<T>> = T[K];
export type DeepPartial<T> = {[P in keyof T]?:DeepPartial<T[P]>;};
export type DeepPartialExcept<T,K extends keyof T> = DeepPartial<T> & Pick<T,K>;
export type Primitive = string|number|boolean|Function|{[k:string]:any;}|any[];
export type DataMap<T> = {[key:string]:T};
export type EnumMap<K extends string,T> = {[k in K]:T};
export type Strings = DataMap<string>;
export type EnumStrings<K extends string> = EnumMap<K,string>;
export type Numbers = DataMap<number>;
export type EnumNums<K extends string> = EnumMap<K,number>;
export type Bools = DataMap<boolean>;
export type EnumBools<K extends string> = EnumMap<K,boolean>;
export type Methods<T> = DataMap<Method<T>>;
export type TypedMethods<T,U> = DataMap<TypedMethod<T,U>>;
export type CalcVars = DataMap<any>;
export type Calculation = (o:CalcVars) => string|boolean|number|any;
export type Entity = {
  id:string;
  created:Date;
  updated?:Date;
  removed?:Date;
  desc?:string;
  meta?:MiscInfo;};
export type SelectedEntity<T extends Entity> = {id:T["id"];i:number;item:T;};
export type EntitySet<T extends Entity> = {
  items:T[];
  ids:string[];
  selected:SelectedEntity<T>|null;};
export type DeletedEntity = {id:string;done:boolean;ok:boolean;};

export type ReqValidationError = {msg:string;param:string;location:string;};
export type ValidationErrors = {errors:ReqValidationError[]|DataMap<any>};
export type ErrorConfig = Partial<{
  msg:string;
  status:number;
  code:number|string;
  warning:boolean;
  info:string|MiscInfo;} & ValidationErrors>;
export type ErrorObj = Error & ErrorConfig & Entity;
export type ErrorType = Error|ErrorObj|ValidationErrors;
export type Errors = DataMap<ErrorType>;
export type EnumErrors<K extends string> = EnumMap<K,ErrorType>;

export type KnownType = Primitive|ErrorType|Date;
export type Values = DataMap<KnownType>;
export type ValueMethods = Methods<KnownType>;
export type MiscInfo = Values;
export type EnumInfo<K extends string> = EnumMap<K,Values>;
export type Status<K> = {name:K;time:Date;info:MiscInfo;};

export interface LocaleDateOpts {
  weekday?: string;
  month?: string;
  day?: string;
  year?: string;
  hour?: string;
  hour12?: boolean;
  minute?: string;
  second?: string;
}
export interface AppLocals {
  dateFormat: LocaleDateOpts;
}
