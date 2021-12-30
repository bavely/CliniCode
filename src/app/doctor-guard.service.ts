import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthenticationService } from './authentication.service'

@Injectable()
export class DoctorGuard implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router) {}

  canActivate() {
    if (!this.auth.flag) {
      this.router.navigateByUrl('/login')
      return false
    }
    if (!this.auth.isDoctor()) {
      this.router.navigateByUrl('/login')
      return false
    }
    return true
  }
}
