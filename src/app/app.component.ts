import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './authentication.service'
import { Router } from "@angular/router"
import { Observable } from 'rxjs';
import swal from 'sweetalert2';

// Time Out
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;

  title = 'my-app';
  // loggedIn : boolean = this.auth.isLoggedIn()
  loggedIn: boolean = this.auth.flag
  logged$: Observable<boolean>
  username: any
  ngOnInit() {
    this.logged$ = this.auth.isLogged;

  }

  constructor(private auth: AuthenticationService, private router: Router, private idle: Idle, private keepalive: Keepalive) {
    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(500000);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(500000);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => {
      this.idleState = 'No longer idle.'
    });

    idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      this.Onlogout()
      this.WarningMsg() 
    });

    idle.onIdleStart.subscribe(() => {this.idleState = 'Your Session Will Expire After 5 Sec.'
    this.WarningMsg()  
  
  });
    
    idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState =  countdown
      console.log(countdown)

    });

    // sets the ping interval to 15 seconds
    keepalive.interval(15);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());

    
    
    console.log(this.idleState)


  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }

WarningMsg(){

  if(this.idleState === "Your Session Will Expire After 5 Sec."){
    swal({
      // title: 'Your Session About To Expire.',
      text: this.idleState ,
      type: 'warning',
      showCancelButton: false,
      confirmButtonClass: 'btn btn-fill btn-success btn-mr-5',
      cancelButtonClass: 'btn btn-fill btn-danger',
      confirmButtonText: 'Continue Working',
       buttonsStyling: false,
  
    }).then((result) => {
      console.log(result.value)
      if (result.value) {
        this.reset()
      }
    })
  }else if(this.idleState === "Timed out!"){
    swal({
      // title: 'Your Session About To Expire.',
      text: this.idleState ,
      type: 'warning',
      showCancelButton: false,
      confirmButtonClass: 'btn btn-fill btn-success btn-mr-5',
      cancelButtonClass: 'btn btn-fill btn-danger',
      confirmButtonText: 'OK',
       buttonsStyling: false,
  
    })

  }
  


}
  Onlogin(flag) {
    this.loggedIn = flag
    this.username = localStorage.getItem('username')
    this.reset();
  }




  Onlogout() {
    this.auth.logout()
    this.router.navigateByUrl('/login')
    this.loggedIn = false
  }
}
