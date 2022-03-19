import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppLoggingService } from './logger';
import * as StackTrace from 'stacktrace-js';

@Injectable({providedIn:"root"})
export class AppErrorHandler implements ErrorHandler {
  constructor(private location:LocationStrategy,private L:AppLoggingService){}
  handleError(error){
    const message = error.message?error.message:error.toString();
    const url = location instanceof PathLocationStrategy?location.path():'';
    StackTrace.fromError(error).then(stackframes => {
      const stack = stackframes.splice(0,20).map(sf => sf.toString()).join('\n');
      this.L.log({message,url,stack});});
    throw error;
  }
}