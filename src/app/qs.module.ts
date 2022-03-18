import { NgModule } from '@angular/core';
import { SharedModule } from "@shared";
import { QS_SharedModule } from "../../shared/shared";
import { QS_StateModule } from "../../state/state";
import { QS_LayoutModule } from "../../layout";
import { QS_RoutingModule } from './qs-routing.module';
import { QS_Component } from './qs.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '@env/environment.prod';

@NgModule({
  declarations: [QS_Component],
  imports: [
    SharedModule,
    QS_SharedModule,
    QS_StateModule,
    QS_LayoutModule,
    QS_RoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ]
})

export class QS_Module { }