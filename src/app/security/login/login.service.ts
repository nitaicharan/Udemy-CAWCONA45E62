import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import { User } from 'app/security/login/user.model';
import { HttpClient } from '@angular/common/http';
import { MEAT_API } from 'app/app.api';
import { NotificationService } from 'app/shared/messages/notification.service';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class LoginService {

  user: User;
  lastPath: string

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private router: Router
  ) {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => this.lastPath = event.url);
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${MEAT_API}/login`, { email: email, password: password }).do(user => this.user = user)
  }

  getName = (): string => this.user.name;
  isLoggedIn = (): boolean => this.user !== undefined;

  getToken = (): string => this.user.acessToken;
  handleLogin = (nextPath: string = this.lastPath) => this.router.navigate(['/login', btoa(nextPath)])

  handleLogout = () => this.user = undefined;
}
