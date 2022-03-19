import { Injectable } from '@angular/core';
import { HCLContent } from '../models';
import { AppHttpService } from './common';

@Injectable({providedIn:'root'})

export class HCLContentService  extends AppHttpService {
  url = "localhost:3000/api/v1/content";
  fetch(){return this.get<HCLContent>();}
}