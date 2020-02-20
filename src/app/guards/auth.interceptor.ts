import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../core/services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loginService = this.injector.get(LoginService);
    return next.handle(
      loginService.isLoggedIn() ?
        req.clone({ setHeaders: { Authorization: `Bearer ${loginService.getToken()}` } }) :
        req
    );
  }
  constructor(private injector: Injector) { }
}
