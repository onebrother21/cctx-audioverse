import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Ad,Room,randomIntFromInterval } from '@state';//Survey,Forum

@Component({
  selector: 'qs-preview-list',
  templateUrl: './preview-list.component.html',
  styleUrls: ['./preview-list.component.scss'],
})
export class PreviewListComponent {
  title = "preview-list";
  previewTypes = ["ad","room"] as ("ad"|"room"|"survey"|"forum")[];
  maxPreviews = 24;
  @Input() rooms:Room[] = [];
  @Input() ads:Ad[] = [];
  @Input() surveys:Room[] = [];
  @Input() forums:Room[] = [];
  @Output() selectRoom:EventEmitter<Room> = new EventEmitter();
  @Output() selectAd:EventEmitter<Ad> = new EventEmitter();
  @Output() selectSurvey:EventEmitter<Room> = new EventEmitter();
  @Output() selectForum:EventEmitter<Room> = new EventEmitter();
  previewCt:number = 12;
  adIds:number[] = [];
  previewIds:{type:"ad"|"room"|"survey"|"forum",idx:number;}[] = [];
  constructor(){}
  ngOnInit(){this.compileAds();}
  compileAds(){
    const pct = randomIntFromInterval(0,100);
    let previewIdx:number = -1;
    for(let i=0,l=this.maxPreviews;i<l;i++){
      const typeIdx = randomIntFromInterval(0,this.previewTypes.length-1);
      const type = this.previewTypes[typeIdx] as "ad"|"room"|"survey"|"forum";
      switch(type){
        case "ad":previewIdx = randomIntFromInterval(0,this.ads.length-1);break;
        case "room":previewIdx = randomIntFromInterval(0,this.rooms.length-1);break;
        case "survey":previewIdx = randomIntFromInterval(0,this.surveys.length-1);break;
        case "forum":previewIdx = randomIntFromInterval(0,this.forums.length-1);break;
        default:break;
      }
      //preview?this.previewIds.push(pct <= 25?ad:-1);
      previewIdx == undefined?this.previewIds.push({type,idx:previewIdx}):null;
    }
  }
}
