import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

  canAcess(path: string) {
    const logged = this.loginService.isLoggedIn()
    if (!logged) {
      this.loginService.handleLogin(`/${path}`);
    }
    return logged;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canAcess(route.routeConfig.path);
  }

  canLoad(route: Route): boolean {
    return this.canAcess(route.path)
  }

  constructor(private loginService: LoginService) { }
}
