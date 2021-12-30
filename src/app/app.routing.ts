import { Routes } from '@angular/router';
import { from } from 'rxjs';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './auth-guard.service';

import { AdminComponent } from './admin/admin.component';
var userType = localStorage.getItem('usertype')

export const AppRoutes: Routes = [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
}
, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },{
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
    },{
        path: 'forms',
        loadChildren: './forms/forms.module#Forms'
    },{
        path: 'tables',
        loadChildren: './tables/tables.module#TablesModule'
    },{
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule'
    },{
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule'
    },{
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'
    }
    ,{
        path: '',
        loadChildren: './userpage/user.module#UserModule'
    }
    ,{
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
    },{
        path: 'admin',
        component: AdminComponent
    }
    ]}
    ,{
        path: 'register',
        component: RegisterComponent
    },{
        path: 'login',
        component: LoginComponent
    },
    
    
];