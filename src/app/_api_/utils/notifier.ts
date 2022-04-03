import { Injectable } from "@angular/core";
import { Strings } from "../common";
import { Subject } from "rxjs";

@Injectable({providedIn:"root"})
export class MockBackendNotifier {
  private notification = new Subject<string>();
  notification$ = this.notification.asObservable();
  notifications:Strings = {
    verification:"[SENT VIA EMAIL/TEXT] Your verification code is:",
    registration:"**Here is your verification code sent via email or phone**",
    unrecognizedLogin:"**Here is your verification code sent via email or phone**",
    pinUpdated:"**Here is your verification code sent via email or phone**",
  };
  send(type:string,data:string){this.notification.next(this.notifications[type]+" "+data);}
}