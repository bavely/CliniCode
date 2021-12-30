import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { TherapyTypes } from '../../services/therapytypes.service'
import { Prescriptions } from '../../services/prescriptions.service'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
 import {NotificationsService} from '../../services/notifications.service'
 import { Note } from '../../Interface/note';
@Component({
  selector: 'app-prescription-form',
  templateUrl: './prescription-form.component.html',
  styleUrls: ['./prescription-form.component.css']
})
export class PrescriptionFormComponent implements OnInit {

  // nots: Item = {
  //   name:''
  // }
  constructor(
              private usersService :UsersService,
              private prescriptions :Prescriptions,
              private therapyTypes :TherapyTypes,
              private formBuilder: FormBuilder,
              private notify : NotificationsService,
              ) {}
             
 
  patients = [];
  types = [];
  form: FormGroup;
  images;
  multipleImages;
  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }
  selectMultipleImage(event){
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }
  ngOnInit(): void {
    this.usersService.getAllPatients().subscribe(res => {
      this.patients = res;
    })
    this.therapyTypes.getAll().subscribe(res => {
      this.types = res;
    })
  this.form = this.formBuilder.group({
    patient: [null, [Validators.required]],
    type: [null, [Validators.required]],
    file:[]
  });

  this.notify.GetUsersList()
  }
  newPresc() {
    if (this.form.invalid) {
      return;
    }
    const formData = new FormData();
   
   //formData.append('file', this.images);
   // this.form.patchValue({file:this.multipleImages});
  formData.append('userId', localStorage.getItem('currentUserId'))
  formData.append('patient',this.form.value.patient)
  formData.append('type',this.form.value.type)
  for(let img of this.multipleImages){
    formData.append('file', img);
  } 
   // console.log(formData);
   //this.form.value.userId =localStorage.getItem('currentUserId')
   console.log(formData)
    this.prescriptions.create(formData).subscribe(
     
 (resp)=>{   

const notes: Note ={
  $key: 'Test',
  name: this.form.value.patient,
  email : 'email',
  type: this.form.value.type

}
console.log(notes)
  this.notify.AddUser(notes)
  this.form.reset()

}
    //this.form.patchValue({file:formData});
    //this.form.updateValueAndValidity();
    //this.prescriptions.create(this.form.value).subscribe(
      // (resp) =>this.form.reset()
      //send notication
    );
 // console.log('submit')
 // console.log(this.form.value)

 
  }
  get f() {
    return this.form.controls;
  }
}


 



