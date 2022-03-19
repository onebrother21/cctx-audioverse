import { Injectable } from '@angular/core';
import { AppHttpService } from './common';
import { HCLGame } from '../models';

@Injectable({providedIn: 'root'})

export class HCLGamesService extends AppHttpService {
  url = 'localhost:3000/api/v1/games';
  fetchRecent(){return this.get<HCLGame[]>();}
  create(game:HCLGame){return this.post<HCLGame>(undefined,game);}
  update(id:string,updates:HCLGame){return this.put<HCLGame>(undefined,id,updates);}
  remove(id:string){return this.del(undefined,id);}
}