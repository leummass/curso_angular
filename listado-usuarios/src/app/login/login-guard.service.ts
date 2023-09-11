import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuard {
  constructor(private loginService: LoginService, private router: Router) {}

  CanActivateLogin() {
    if (this.loginService.isAuth()) {
      console.log('log');
      return true;
    } else {
      console.log('not log');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
