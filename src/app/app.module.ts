import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import * as _ from 'lodash';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NotifierModule } from 'angular-notifier';

import { AppRoutingModule } from './app-routing.module';
import { PrimeNgModule } from './ui-components/primeng.module';

import { AppComponent } from './app.component';
import { COMPONENTS } from './components/index';

import { MsalInterceptor } from './services/msal/msal.interceptor';
import { AuthInterceptor } from './services/auth/auth.interceptor';
import { notifierDefaultOptions } from './services/notifier/notifier.config';
import { HandleErrorService } from './services/core/handle-error.service';
import { LoadingInterceptor } from './services/core/loading.interceptor';
import { SERVICES } from './services';

@NgModule({
  declarations: _.concat(COMPONENTS, AppComponent),
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PrimeNgModule,
    NgxSpinnerModule,
    NotifierModule.withConfig(notifierDefaultOptions)
  ],
  providers: _.concat(
    SERVICES,
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: ErrorHandler, useClass: HandleErrorService }
  ),
  bootstrap: [AppComponent]
})
export class AppModule { }
