import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})

export class AppWindowService {
  scroll;
  async pseudofier(){
    const {
      navigator:{appName,appVersion,doNotTrack,cookieEnabled,plugins,mimeTypes,
      userAgent,geolocation},
      screen:{width,height,pixelDepth},
    } = window;
    const location = await new Promise((done,reject) => geolocation.getCurrentPosition(done,reject))
    .catch(e => null);
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