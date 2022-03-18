
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QS_BlueBoxComponent } from './qs-blue-box';
import { QS_IconComponent } from './qs-icon';
import { QS_IconMenuComponent } from './qs-icon-menu';
import { QS_IconMenuItemComponent } from './qs-icon-menu-item';
import { QS_NumberPadComponent } from './qs-numpad';
import { QS_LoadingIndicatorComponent } from './qs-loading-indicator';
import { QS_ReactionsComponent } from './qs-reactions';
import { QS_UploadComponent } from './qs-upload';
import { QS_UploadDetailsComponent } from './qs-upload-details';
import { QS_UploadListComponent } from './qs-upload-list';
import { QS_UploadsComponent } from './qs-uploads';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QS_UploadsRoutingModule { }
export const COMPONENTS = [
  QS_UploadComponent,
  QS_UploadDetailsComponent,
  QS_UploadListComponent,
  QS_UploadsComponent,
  QS_IconComponent,
  QS_IconMenuComponent,
  QS_IconMenuItemComponent,
  QS_BlueBoxComponent,
  QS_NumberPadComponent,
  QS_LoadingIndicatorComponent,
  QS_ReactionsComponent,
];