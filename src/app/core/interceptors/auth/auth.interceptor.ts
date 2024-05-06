import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (typeof window !== 'undefined' && window.localStorage) {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        const modifiedReq = request.clone({
          setHeaders: { Authorization: `Bearer ${accessToken}` }
        });
        return next.handle(modifiedReq);
      }
    }
    return next.handle(request);
  }
}
