
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-patients-search',
  templateUrl: './patients-search.component.html',
  styleUrls: ['./patients-search.component.css']
})
export class PatientsSearchComponent implements OnInit {
  URLBase = "http://localhost:1337"
  emrpatients: any = []
  clinipatients: any = []
  temrpatients: any = []
  tclinipatients: any = []
  femrpatients: any = []
  fclinipatients: any[];
  emrcount: any = ""
  clinicount: any = ""
  indexOfelement = ''


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onPtSearch(postData: { FName: string; Lname: string; MRN: string }) {
    // ------------------------------------------------------- //
    // Send Http request for emr
    // ------------------------------------------------------- //
    this.http
      .post(
         this.URLBase+'/api',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData[0]);
        this.emrpatients = responseData[0]
        this.emrcount = responseData[1]
        console.log(this.emrcount)
        this.onDatavalidation(this.emrpatients, this.clinipatients)

      });


    // ------------------------------------------------------- //
    // Send Http request for clinivoy
    // ------------------------------------------------------- //
    this.http
      .post(
        this.URLBase+'/cliniapi',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData[0]);
        this.clinipatients = responseData[0]
        this.clinicount = responseData[1]
        console.log(this.clinicount)
        this.onDatavalidation(this.emrpatients, this.clinipatients)
      });
  }

  // -------------------------------------------------------------------//
  //Set Data in CliniVoy DB
  //-------------------------------------------------------------------//
  onFromcttocli(pindex) {
    console.log("Test Here")
    console.log(this.temrpatients[pindex])
    console.log(pindex)
    console.log(this.indexOfelement)
    console.log("Test Here")
    this.http
      .post(
        this.URLBase+'/clinisetapi',
        this.temrpatients[pindex]
      )
      .subscribe(responseData => {
        console.log(responseData[0]);
        this.clinipatients = responseData[0]
        this.clinicount = responseData[1]
        console.log(this.clinicount)

      });
  }

  // -------------------------------------------------------------------//
  //Set Data in CareTnd DB
  //-------------------------------------------------------------------//

  onFromclict(pindex) {
    console.log(this.tclinipatients[pindex])
    console.log(pindex)
    console.log(this.indexOfelement)
    this.http
      .post(
        this.URLBase+'/ctsetapi',
        this.tclinipatients[pindex]
      )
      .subscribe(responseData => {
        console.log(responseData[0]);
        this.emrpatients = responseData[0]
        this.emrcount = responseData[1]
        console.log(this.emrcount)
      });
  }
  onDatavalidation(emrpatients, clinipatients) {

    let m1 = new Map();
    let m2 = new Map();
    clinipatients.forEach(function (cPt, i) {
      var v1: string = cPt.FirstName + cPt.LastName + cPt.MedicalRecordNo
      m1.set(v1, v1)
    });
    emrpatients.forEach(function (ePt, i) {
      var v2: string = ePt.FirstName + ePt.LastName+ ePt.MedicalRecordNo
      m2.set(v2, v2)

    });

    //  function mapeSearch(map1, map2) {
      const te = []
      const fe = []
      const tc = []
      const fc = []
      let m3 = new Map();
      var testVal
      var val
      // for (var key of m1) {
      //   //val is the value from clini and testval from EMR
      //   //the keys and values are the same, By creat a loop to check the value we can get from the EMR useing clinivoy keys
      //   val = m1.get(key);
      //   testVal = m2.get(key);
      //   //now by checking if we got acual value that means there is a match between two objects in EMR and CliniVoy
      //   if (testVal == val || testVal !== undefined) {
      //     //now we will set that value into new map m3. If no values that is mean we don't have to capture any results into m3
      //     m3.set(val, val)
      //   }

      // }

      emrpatients.forEach(async function (ePt, i) {
        //by setting a hash exact same to the one we used in m1 and m2 (v2)
        var v2: string = ePt.FirstName + ePt.LastName + ePt.MedicalRecordNo
        // using v2 as a key to find match in m3, And because m3 is the map that includes only the hashes that exists in both EMR and CliniVoy.
        if (v2 == m3.get(v2)) {
          ePt.indicator = false
          ePt.ekey = v2
          fe.push(ePt)
        } else {
          ePt.indicator = true
          ePt.ekey = v2
          te.push(ePt)
        }
      });



      clinipatients.forEach( async function (cPt, i) {
        var v1: string = cPt.FirstName + cPt.LastName + cPt.MedicalRecordNo
        if (v1 == m3.get(v1)) {
          cPt.indicator = false
          cPt.ckey = v1
          fc.push(cPt)
        } else {
          cPt.indicator = true
          cPt.ckey = v1
          tc.push(cPt)
        }

      });



      // const tefetcfc = {te,fe,tc,fc}
this.tclinipatients = fc.concat(tc)
// this.fclinipatients =
this.temrpatients =fe.concat(te)
// this.femrpatients =
console.log(this.tclinipatients)

console.log(this.temrpatients )

      // return tefetcfc


    // }

  }
}
