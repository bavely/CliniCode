import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthenticationService } from '../services/authentication.service'

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router) {}

  canActivate() {
    this.router.navigateByUrl('/login')

    if (!this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/login')
      return false
    }
    return true
  }
}
