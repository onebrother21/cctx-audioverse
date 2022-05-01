
export type Digit = "0"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9";
export type Constructor<T> = new (...args:any[]) => T;
export type DeepPartial<T> = {[P in keyof T]?:DeepPartial<T[P]>;};
export type DeepPartialExcept<T,K extends keyof T> = DeepPartial<T> & Pick<T,K>;
export type Nullable<T> = T|null;
export type Newable<T> = { new (...args: any[]): T; };
export type Keys<T> = keyof T;
export type Values<T> = {[k in keyof T]:T[k]}[keyof T];
export type Primitive = string|number|boolean|Date|Error;
export type PrimitiveArr = Primitive[];
export interface Primitives {[key:string]:Primitive|PrimitiveArr|Primitives;}
export type DataMap<T> = {[key:string]:T};
export type Enum<T,K extends string|undefined = undefined,J extends string|undefined = undefined> =
(K extends string?Record<K,T>:DataMap<T>) &
(J extends string?Partial<Record<J,T>>:{});
export type Strings<K extends string|undefined = undefined> = Enum<string,K>;
export type Numbers<K extends string|undefined = undefined> = Enum<number,K>;
export type Bools<K extends string|undefined = undefined> = Enum<boolean,K>;
export type Method<T> = (...params:any[]) => T;
export type Methods<T> = DataMap<Method<T>>;
export type TypedMethod<T,U> = (...params:(T|any)[]) => U;
export type TypedMethods<T,U> = DataMap<TypedMethod<T,U>>;
export type Entity = {
  id:string;
  qid:`qs-${string}`;
  created:Date;
  updated?:Date;
  removed?:Date;
  desc?:string;
  info?:string|MiscInfo;
  meta?:MiscInfo;
};
export type SelectedEntity<T> = {id:string;i:number;item:T;};
export type EntitySet<T> = {
  items:T[];
  ids:string[];
  selected:Nullable<SelectedEntity<T>>;
};
export type DeletedEntity = {id:string;done:boolean;ok:boolean;};

export type ReqValidationError = {msg:string;param:string;location:string;};
export type ValidationErrors = {errors:ReqValidationError[]|DataMap<any>};
export type ErrorConfig = Partial<{
  message:string;
  msg:string;
  status:number;
  code:number|string;
  warning:boolean;
} & ValidationErrors>;
export type ErrorObj = Error & ErrorConfig & Entity;
export type ErrorType = Error|ErrorObj|ValidationErrors;
export type Errors<K extends string|undefined = undefined> = Enum<ErrorType,K>;

export type MiscInfo = Primitives;
export type Status<K> = {name:K;time:Date;info?:MiscInfo;};
export type LocaleDateOpts = Record<"weekday"|"month"|"day"|"year"|"hour"|"minute"|"second",string> & {hour12?:boolean;};