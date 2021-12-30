import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TherapyTypes {
 public baseurl = "http://localhost:1337"
  constructor(private http: HttpClient, private router: Router) {
  }

  getAll(): Observable<any> {
    return this.http.post(this.baseurl +'/getTherapyTypes',{})
  }
}
