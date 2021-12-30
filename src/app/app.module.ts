import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import {AdminsbModule} from './adminSidebar/adminsb/adminsb.module'
import { SidebarModule } from './sidebar/sidebar.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { PagesnavbarModule} from './shared/pagesnavbar/pagesnavbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AppRoutes } from './app.routing';
import { AlertComponent } from './alert/alert.component';

import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service'
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuardService } from './auth-guard.service'
import { AdminGuard } from './admin-guard.service'
import { PatientGuard } from './patient-guard.service'
import { DoctorGuard } from './doctor-guard.service'

import { from } from 'rxjs';
import { AdminComponent } from './admin/admin.component';

// Time Out
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment';
// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';


@NgModule({
    imports:      [
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(AppRoutes,{
          useHash: true
        }),
        HttpModule,
        SidebarModule,
        AdminsbModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule,
        PagesnavbarModule,
        MomentModule,
    NgIdleKeepaliveModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig, 'CliniVoy'),
    AngularFirestoreModule,
    AngularFireDatabaseModule
    
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
        AlertComponent,
        LoginComponent,
        RegisterComponent,
        AdminComponent,
    ],
    
    bootstrap:    [ AppComponent ]
    ,
    providers: [AuthenticationService, AuthGuardService,AdminGuard,PatientGuard,DoctorGuard]
})

export class AppModule { }
