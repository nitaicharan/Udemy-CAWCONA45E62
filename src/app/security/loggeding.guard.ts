import { CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';

@Injectable()
export class LoggedInGuard implements CanLoad {

  canLoad(route: Route): boolean {
    const notLoggedIn = !this.loginService.isLoggedIn()
    if (notLoggedIn) {
      this.loginService.handleLogin(`/${route.path}`);
    }
    return notLoggedIn;
  }
  constructor(private loginService: LoginService) { }
}
