import { AuthService } from './shared/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      return false;
    }
  }
}
