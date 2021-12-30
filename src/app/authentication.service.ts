import { Injectable,Injector } from '@angular/core';
import { HttpClient , HttpEvent, HttpHandler, HttpInterceptor, HttpResponse} from '@angular/common/http';
import {HttpRequest} from "@angular/common/http";
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface UserInfo{
  username: string
  email: string
  type: string
  password: string
}



@Injectable()
export class AuthenticationService {
  public UserData
  public flag: boolean = false
  private token: string
  public userType: string
  public baseurl = "http://localhost:1337"
  //private loggedIn = new BehaviorSubject<boolean>(false);
  private logged = new BehaviorSubject<boolean>(this.checkLoginStatus())


  constructor(private http: HttpClient, private router: Router) {}

  private saveToken(data: any): void {
    localStorage.setItem('usertoken', data.authToken.token)
    localStorage.setItem('username', data.user.username)
    localStorage.setItem('userType', data.user.type)
    localStorage.setItem('currentUserId', data.user.id)
    this.token = data.authToken.token
    this.userType = data.user.type
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken')
    }
    return this.token
  }
  private getUserType(): string {
    if (!this.userType) {
      this.userType = localStorage.getItem('userType')
    }
    return this.userType
  }


   checkLoginStatus():boolean{
    console.log(this.isLoggedIn())
    return this.flag

  }
  public isLoggedIn(): boolean {
    this.getToken()
    if (this.token) {
      let time = parseInt( this.token.split('.')[1])
      this.flag = true;
      console.log(time + 150*60*1000  > Date.now())
        return time + 150*60*1000  > Date.now() // 5 min "For Testing"
    } else {
      this.flag = false
      return false
    }
  }

  public register(user: UserInfo): Observable<any> {
    //
    return this.http.post(this.baseurl +'/register', user)
  }
 /*  get isLoggedInn() {
    return this.loggedIn.asObservable();
  } */
  public login(user: UserInfo): Observable<any> {
    const base = this.http.post(this.baseurl +'/login', user)
    const request = base.pipe(
      map((data: any) => {
        if (data.user) {
         // this.loggedIn.next(true);
          this.saveToken(data)
        }
        this.UserData = data.user
        console.log(data)
        return data
      })
    )

    return request
  }
  public isAdmin(){
    this.getUserType()
    if(this.userType=='3' ) return true
    return false
  }
  public isPatient(){
    this.getUserType()
    console.log(this.userType)
    if(this.userType=='1' || this.userType=='3' ) return true
    return false
  }
  public isDoctor(){
    this.getUserType()
    if(this.userType=='2' || this.userType=='3' ) return true
    return false
  }
  public logout(): void {
    this.http.post(this.baseurl +'/logout', this.token)
    this.token = ''
    localStorage.clear();
    this.router.navigateByUrl('/login')
    this.flag = false
  }


  get isLogged(){
    return this.logged.asObservable()
  }
}
