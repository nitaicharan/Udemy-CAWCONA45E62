import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

  canAcess(path: string) {
    const notLoggedIn = !this.loginService.isLoggedIn()
    if (notLoggedIn) {
      this.loginService.handleLogin(btoa(`/${path}`));
    }
    return notLoggedIn;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canAcess(route.routeConfig.path);
  }

  canLoad(route: Route): boolean {
    return this.canAcess(route.path)
  }

  constructor(private loginService: LoginService) { }
}
