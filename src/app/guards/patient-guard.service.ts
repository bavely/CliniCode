import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthenticationService } from '../services/authentication.service'

@Injectable()
export class PatientGuard implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router) {}

  canActivate() {
    if (!this.auth.isLoggedIn()) {
        this.router.navigateByUrl('/login')
        return false
      }
    if (!this.auth.isPatient()) {
      this.router.navigateByUrl('/')
      return false
    }
    return true
  }
}
