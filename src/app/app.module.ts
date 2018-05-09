import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ShowValidationErrorComponent } from './show-validation-error/show-validation-error.component';
import { LayoutApplicationComponent } from './layout-application/layout-application.component';

import { SurveyDataService } from './services/survey-data.service';
import { ManageLandRecordsService } from './services/managelandrecords.service'


import { AppRoutingModule } from './app-routing.module';
import { ApproveSurveyComponent } from './approve-survey/approve-survey.component';
import { GmapsComponent } from './gmaps/gmaps.component';
import { LoginComponent } from './login/login.component';
import { ViewlandrecordComponent } from './view-land-record/view-land-record.component';
import { AuthGuard } from './guards/auth-guard';
import { LoginAuthenticationService } from './services/login-authentication.service';
import { LogoutComponent } from './logout/logout.component';
import{FileUploadService} from './services/file-upload.service';


@NgModule({
  declarations: [
    AppComponent,
    ShowValidationErrorComponent,
    LayoutApplicationComponent,
    ApproveSurveyComponent,
    GmapsComponent,
    LoginComponent,
    ViewlandrecordComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSIFuXPQXel1splGkx5ElXoU1bL60Jn-I' //credentials for Angular google maps
    }), 
    AppRoutingModule
    
  ],
  providers: [SurveyDataService,ManageLandRecordsService,AuthGuard,LoginAuthenticationService,FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
