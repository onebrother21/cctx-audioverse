import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable,catchError,throwError, of } from 'rxjs';
import { delay,mergeMap,materialize,dematerialize } from 'rxjs/operators';
import { MockBackendRouter } from "./routers";

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {
  constructor(private main:MockBackendRouter){}
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    return of(req)
    .pipe(mergeMap(this.main.route))
    .pipe(materialize(),delay(300),dematerialize())
    .pipe(catchError(error => {
      //console.warn('the interceptor has caught an error, process it here',error);
      return throwError(() => error);
    }));
  }
}
export const MockBackendProvider = {
  provide:HTTP_INTERCEPTORS,
  useClass:MockBackendInterceptor,
  multi:true,
};