import { Injectable } from '@angular/core';
import { AppHttpService } from './common';
import { HCLPlayerJson } from '../models';

@Injectable({providedIn: 'root'})

export class HCLPlayersService extends AppHttpService {
  url = 'localhost:3000/api/v1/players';
  fetchRecent(){return this.get<HCLPlayerJson[]>();}
  update(id:string,updates:Partial<HCLPlayer>){return this.put<HCLPlayerJson>(undefined,id,updates);}
}