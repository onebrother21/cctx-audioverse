import { Injectable } from "@angular/core";
import { AppLocalStorageService } from "./local-storage.service";
import { AppVars } from "@env/vars";

@Injectable({providedIn:"root"})

export class AppWindowService {
  scroll:number = 0;
  constructor(private local:AppLocalStorageService){}
  refreshVersion(){
    const version = this.local.get("appversion");
    if(!version || version !== AppVars.version){
      this.local.set("appversion",AppVars.version);
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
    };
  };
  geolocate = async () => {
    const location = await new Promise((done,reject) => window.navigator.geolocation.getCurrentPosition(done,reject))
    .catch((e:Error) => console.error(e));
    return {location};
  }
}