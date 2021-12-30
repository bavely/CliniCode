import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagesRoutes } from './pages.routing';


import { LockComponent } from './lock/lock.component';
import { PatientsSearchComponent } from './patients-search/patients-search.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
// maps
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AuthenticationService } from '../services/authentication.service'
 import { AuthGuardService } from '../guards/auth-guard.service'
 import { AdminGuard } from '../guards/admin-guard.service'
 import { PatientGuard } from '../guards/patient-guard.service'
 import { DoctorGuard } from '../guards/doctor-guard.service'
import { PrescriptionFormComponent } from './prescription-form/prescription-form.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PagesRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        // BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCFO5jHc2cumkrA4yjyFABkWO0dRsvS_Vk',
      
      libraries: ['places']
    }),
 MatGoogleMapsAutocompleteModule
    ],
    providers: [AuthenticationService, AuthGuardService,AdminGuard,PatientGuard,DoctorGuard],
    declarations: [
 
        LockComponent,
 
        PatientsSearchComponent,
 
        AddPatientComponent,
        PrescriptionFormComponent
    ]
    // , AuthGuardService,AdminGuard,PatientGuard,DoctorGuard
})

export class PagesModule {}
