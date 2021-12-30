import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthGuardService } from '../auth-guard.service'


export const DashboardRoutes: Routes = [{
    path: '',
    children: [{
        path: '',
        component: DashboardComponent,canActivate: [AuthGuardService]
    }]
}];
