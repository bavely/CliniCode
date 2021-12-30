import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthenticationService, UserInfo } from '../authentication.service'
import { Router } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AppComponent} from '../app.component'
// import { AlertService } from '.
declare var $: any;

@Component({
     moduleId: module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    test: Date = new Date();
debugger
    checkFullPageBackgroundImage() {
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };

    ngOnInit() {
        this.checkFullPageBackgroundImage();

        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)

        // ===================================================?//
                this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    
        // get return url from route parameters or default to '/'
        this.returnUrl =  '/login';
    }

    // ----------------------------------------------------------------------------//
    // ----------------------------------------------------------------------------//
    credentials: UserInfo = {
      username: '',
      email: '',
      type: '',
      password: ''
    }
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    constructor(
      private auth: AuthenticationService,
      private loginch : AppComponent,
       private router: Router,
      //  private alertService: AlertService,
       private formBuilder: FormBuilder) {}

    get f() { return this.loginForm.controls; }

 

    login() {
      this.submitted = true;
      if (this.loginForm.invalid) {
        return;
      }
      this.loading = true;
      this.auth.login(this.credentials).subscribe(
        () => {
          this.router.navigateByUrl('dashboard')
          // this.router.navigate(['dashboard'])
          this.loginch.reset();
          this.loginch.Onlogin(true)
  this.auth.flag = true;
        },
        err => {
          // this.alertService.error(err.error);
          this.loading = false;
          this.auth.flag = false;
          this.loginch.Onlogin(false)
        }
      )
    }
}
