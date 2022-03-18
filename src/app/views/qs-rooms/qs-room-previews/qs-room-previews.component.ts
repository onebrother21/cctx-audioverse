import { Component } from '@angular/core';
import { QS_Ad, QS_Room } from '@qs-state';
import { QS_RoomsService } from '../qs-rooms.service';

@Component({
  selector: 'qs-room-previews',
  templateUrl: './qs-room-previews.component.html',
  styleUrls: ['./qs-room-previews.component.scss'],
})
export class QS_RoomPreviewsComponent {
  title = "qs-room-previews";
  previews:QS_Room[] = this.rooms.previews;
  ads:QS_Ad[] = this.rooms.ads;
  previewCt:number = 12;
  adIds:number[] = [];
  previewIds:number[] = [];
  constructor(private rooms:QS_RoomsService){}
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
