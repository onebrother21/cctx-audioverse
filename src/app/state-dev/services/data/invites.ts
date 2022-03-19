import { Injectable } from '@angular/core';
import { AppHttpService } from './common';
import { HCLInvite } from '../models';

@Injectable({providedIn: 'root'})

export class HCLInvitesService extends AppHttpService {
  url = 'localhost:3000/api/v1/invites';
  fetchRecent(){return this.get<HCLInvite[]>();}
  create(invite:HCLInvite){return this.post<HCLInvite>(undefined,invite);}
  update(id:string,updates:HCLInvite){return this.put<HCLInvite>(undefined,id,updates);}
  remove(id:string){return this.del(undefined,id);}
}