import { Injectable } from '@angular/core';
import { HCLTourney } from '../models';
import { AppHttpService } from './common';

@Injectable({providedIn: 'root'})

export class HCLTourneysService extends AppHttpService {
  url = 'localhost:3000/api/v1/tourneys';
  fetchRecent(){return this.get<HCLTourney[]>();}
  create(tourney:HCLTourney){return this.post<HCLTourney>(undefined,tourney);}
  update(id:string,updates:HCLTourney){return this.put<HCLTourney>(undefined,id,updates);}
  remove(id:string){return this.del(undefined,id);}
}