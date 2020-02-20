import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  constructor(private loginService: LoginService) { }

  ngOnInit() { }

  isLoggedIn = () => this.loginService.isLoggedIn();
  getUser = (): string => this.loginService.user.name;
  login = () => this.loginService.handleLogin();
  logout = (): void => this.loginService.handleLogout();
}
