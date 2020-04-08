import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { NotificationService } from 'src/app/shared/messages/notification.service';
import { User } from './user.model';
import { environment } from 'src/environments/environment';

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
    return this.http.post<User>(`${environment.api}/login`, { email, password }).pipe(tap(user => this.user = user));
  }

  getName = (): string => this.user.name;
  isLoggedIn = (): boolean => this.user !== undefined;

  getToken = (): string => this.user.acessToken;
  handleLogin = (nextPath: string = this.lastPath) => this.router.navigate(['/login', btoa(nextPath)]);

  handleLogout = () => this.user = undefined;
}
