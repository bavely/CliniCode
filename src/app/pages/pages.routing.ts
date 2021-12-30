import { Routes } from '@angular/router';

import { LockComponent } from './lock/lock.component';
import { PatientsSearchComponent } from './patients-search/patients-search.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PrescriptionFormComponent } from './prescription-form/prescription-form.component';
import { AdminGuard } from '../guards/admin-guard.service'
import { PatientGuard } from '../guards/patient-guard.service'
import { DoctorGuard } from '../guards/doctor-guard.service'
export const PagesRoutes: Routes = [{
    path: '',
    children: [ {
        path: 'lock',
        component: LockComponent
    },{
        path: 'PatientsSearch',
        component: PatientsSearchComponent
    },{
        path: 'AddPatient',
        component:AddPatientComponent
    },{
        path: 'addPrescription',
        component:PrescriptionFormComponent,
        canActivate: [DoctorGuard]
    }]
}];
