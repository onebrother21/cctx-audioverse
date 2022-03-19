import { Injectable } from '@angular/core';
import { SearchQuery } from '../models';
import { AppHttpService } from './common';
import { of } from 'rxjs';

@Injectable({providedIn:'root'})

export class SearchService extends AppHttpService {
  url = "localhost:3000/api/v1/players/q?";
  go({type,text:q}:SearchQuery){return this.get<any[]>("name="+q);}
}