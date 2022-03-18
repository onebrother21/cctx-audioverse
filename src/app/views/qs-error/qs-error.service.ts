import { Injectable } from "@angular/core";
import { AppService } from "@state";

@Injectable()
export class ErrorService {
  constructor(private app:AppService){}
}