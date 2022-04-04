import { Injectable } from "@angular/core";
import { AppLocalStorageService } from "./local-storage.service";
import { environment as env } from "@env/environment.prod";

@Injectable({providedIn:"root"})

export class AppWindowService {
  scroll:number = 0;
  constructor(private local:AppLocalStorageService){}
  refreshVersion(){
    const version = this.local.get("appversion");
    if(!version || version !== env.version){
      this.local.set("appversion",env.version);
      this.local.set("appuser",{});
      //location.reload();
    }
  }
  scrollUp(){document.body.scrollTo({top:0});}
  async pseudofier(){
    const {
      navigator:{appName,appVersion,doNotTrack,cookieEnabled,plugins,mimeTypes,userAgent,geolocation},
      screen:{width,height,pixelDepth},
    } = window;
    const location = await new Promise((done,reject) => geolocation.getCurrentPosition(done,reject))
    .catch(e => console.error(e));
    return {
      appName,
      appVersion,
      doNotTrack,
      cookieEnabled,
      plugins,
      mimeTypes,
      userAgent,
      width,
      height,
      pixelDepth,
      location
    };
  }
}