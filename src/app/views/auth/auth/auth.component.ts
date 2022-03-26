
import { Component } from "@angular/core";
import { MockBackendNotifier } from "@api";
import { AppService, route$ } from "@state";

@Component({
  selector: 'qs-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  title = "auth";
  alert:string = "";
  constructor(private app:AppService,private notifier:MockBackendNotifier){
    this.app.select(route$).subscribe(route => {if(!/verify/.test(route.url)) this.alert = ""});
    this.notifier.notification$.subscribe(alert => {
      console.log(alert);
      this.alert = alert;
    });
  }
}
