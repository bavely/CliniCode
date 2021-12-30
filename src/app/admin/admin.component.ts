import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserInfo } from "../authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {

  credentials: UserInfo = {
    username: "",
    email: "",
    type: "",
    password: ""
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl("/login");
      },
      err => {
        console.error(err);
      }
    );
  }

}
