import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { LoginService } from '../core/services/login.service';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {
  constructor(private loginService: LoginService) { }

  canAcess(path: string) {
    const logged = this.loginService.isLoggedIn();
    if (!logged) this.loginService.handleLogin(`/${path}`);
    return logged;
  }

  canActivate = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => this.canAcess(route.routeConfig.path);
  canLoad = (route: Route, segments: UrlSegment[]): boolean => this.canAcess(route.path);
}
