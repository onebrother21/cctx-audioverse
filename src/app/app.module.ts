import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared';
import { LayoutModule } from "./layout";
import { AppStateModule } from './state';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '@env/environment.prod';
import { LandingModule } from './views/landing';

@NgModule({
  declarations: [AppComponent],
  imports: [
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
