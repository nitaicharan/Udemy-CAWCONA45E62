import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/security/login/login.service';

@Component({
  selector: 'mt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() { }


  isLoggedIn = () => this.loginService.isLoggedIn();

  getUser = (): string => this.loginService.user.name;

  login = () => this.loginService.handleLogin();

  logout = (): void => this.loginService.handleLogout();
}
