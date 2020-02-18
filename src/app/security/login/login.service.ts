import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { User } from './user.model';
import { NotificationService } from 'src/app/shared/messages/notification.service';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { MEAT_API } from 'src/app/app.api';

@Injectable()
export class LoginService {

  user: User;
  lastPath: string;

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private router: Router
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => this.lastPath = event.url);
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${MEAT_API}/login`, { email, password }).pipe(tap(user => this.user = user));
  }

  getName = (): string => this.user.name;
  isLoggedIn = (): boolean => this.user !== undefined;

  getToken = (): string => this.user.acessToken;
  handleLogin = (nextPath: string = this.lastPath) => this.router.navigate(['/login', btoa(nextPath)]);

  handleLogout = () => this.user = undefined;
}
