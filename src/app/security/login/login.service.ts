import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from 'app/security/login/user.model';
import { HttpClient } from '@angular/common/http';
import { MEAT_API } from 'app/app.api';
import { NotificationService } from 'app/shared/messages/notification.service';

@Injectable()
export class LoginService {

  user: User;

  constructor(private http: HttpClient, private notificationService: NotificationService) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${MEAT_API}/login`, { email: email, password: password }).do(user => this.user = user)
  }

  isLoggedIn = (): boolean => this.user !== undefined;

  getToken = (): string => this.user.acessToken;
}
