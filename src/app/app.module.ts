import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared';
import { LayoutModule } from "./layout";
import { AppStateModule } from './state';
import { AppRoutingModule } from './app-routing.module';
import { LandingModule } from './views/landing';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '@env/environment.prod';
import { MockBackendModule } from './_api_';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MockBackendModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    LayoutModule,
    AppStateModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    LandingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
