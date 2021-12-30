import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location, Appearance, GermanAddress } from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import { EmailValidator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AddPatientComponent implements OnInit {

  //  ---------------------------------------------------------
  public appearance = Appearance;
  public zoom: number;
  public latitude: number;
  public longitude: number;
  public selectedAddress: PlaceResult;
  streetnumber: any;
  route: any = "";
  city: string = "";
  State: string = "";
  country: string = "";
  zip: any;
  address: any = "";
  sendtext: boolean = false;
  baseurl = "http://localhost:1337"
  constructor(private titleService: Title,private http: HttpClient) {
  }

  ngOnInit() {
    this.titleService.setTitle('Home | @angular-material-extensions/google-maps-autocomplete');

    this.zoom = 10;
    this.latitude = 52.520008;
    this.longitude = 13.404954;

    this.setCurrentPosition();

  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAutocompleteSelected: ', result);
    // this.streetnumber = result.address_components[0].long_name
    // this.route = result.address_components[1].long_name
    // // this.city = result.address_components[3].long_name
    // this.State = result.address_components[4].long_name
    // this.country = result.address_components[5].long_name
    //  this.zip = result.address_components[6].long_name
  }

  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }

  onGermanAddressMapped($event: GermanAddress) {
    // console.log('onGermanAddressMapped', $event);
    // console.log( $event.displayAddress);
    this.city = $event.displayAddress
    this.address = this.city.split(",")
    const statezip = this.address[2].split(" ")
    this.State = statezip[1]
    this.zip = statezip[2]
    console.log(statezip)
  }

  // ----------------------------------------------------------

  onPtAdd(postData: {
    FName: string,
    LName: string,
    DOB: Date,
    email: EmailValidator,
    cphone: BigInteger,
    hphone: BigInteger,
    sendtext: boolean,
    Referral_Date: Date,
    Order_Type: string,
    MD_Name: string,
    MD_NPI: BigInteger,
    Allergy: string
  }) {

    const A = this.address[0]
    const B = this.address[1]
    const C = this.State
    const D = this.zip
    const E = this.address[3]
    const PtAddress = {A, B, C, D, E}
    console.log(PtAddress)
    this.http
    .post(
      this.baseurl +'/AddPtApi',
      {postData,PtAddress}
    )
    .subscribe(responseData => {
      console.log(responseData[0]);
      console.log("Here///////////////////////////////////////////////////////////////////////////////////////");


    });
  }

}
