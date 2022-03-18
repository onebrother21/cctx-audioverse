import { Component } from '@angular/core';
import { QS_Ad, QS_SessionRoomPreview } from '@qs-state';
import { QS_UserService } from '../../qs-me/qs-user.service';

@Component({
  selector: 'qs-user-home-previews',
  templateUrl: './qs-user-home-previews.component.html',
  styleUrls: ['./qs-user-home-previews.component.scss'],
})
export class QS_UserHomePreviewsComponent {
  title = "qs-user-home-previews";
  previews:QS_SessionRoomPreview[] = this.user.previews;
  ads:QS_Ad[] = this.user.ads;
  previewCt:number = 12;
  adIds:number[] = [];
  previewIds:number[] = [];
  constructor(private user:QS_UserService){}
  ngOnInit(){this.compileAds();}
  compileAds(){
    for(let i=0,l=11;i<l;i++){
      const pct = this.user.randomIntFromInterval(0,100);
      const ad = this.user.randomIntFromInterval(0,this.ads.length-1);
      const preview = this.user.randomIntFromInterval(0,this.previews.length-1);
      this.adIds.push(pct <= 25?ad:-1);
      this.previewIds.push(preview);
    }
  }
}
