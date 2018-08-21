import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

import { AuthService } from './services/auth/auth.service';
import { GenericService } from './services/core/generic.service';


import { MsalGuard } from './services/msal/msal.guard';
import { MsalService } from './services/msal/msal.service';

import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    MsalGuard,
    MsalService,
    AuthService,
    GenericService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
