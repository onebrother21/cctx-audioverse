import { NgModule } from '@angular/core';
import { MockBackendProvider } from './api.service';

@NgModule({
  providers:[MockBackendProvider],
})

export class MockBackendModule { }