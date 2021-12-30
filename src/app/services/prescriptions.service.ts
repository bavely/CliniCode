import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Prescriptions {
 public baseurl = "http://localhost:1337"
  constructor(private http: HttpClient, private router: Router) {
  }

  create(form): Observable<any> {
    return this.http.post(this.baseurl +'/createPrescription',form)
  }
  getByTherapyType(id){
    this.http.post(this.baseurl +'/getPrescriptionsByTherapyType',id)
    .subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    );
  /*   .catch((err: HttpErrorResponse) => {
      // simple logging, but you can do a lot more, see below
      console.error('An error occurred:', err.error);
    }); */
/*   return this.http.post(
    this.baseurl +'/getPrescriptionsByTherapyType',
     id).pipe(
       retry(1),
      catchError(this.errorHandler)); */
    
  }
}
