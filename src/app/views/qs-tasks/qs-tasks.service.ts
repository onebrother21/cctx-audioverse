import { Injectable } from "@angular/core";
import { AppService } from "@state";
import {
  Session,
  SessionRoomPreview,
} from "@qs-state";

@Injectable()
export class SessionsService {
  items:Session[] = [
    {
      id:"01",
      name:"Creamy Crack",
      duration:"5 min",
      created:"3/11/22 3:00pm",
      updated:"3/11/22 3:00pm",
      members:[{name:"Jackswift"},{name:"BreezeAwesome"},{name:"ThatGirlNikki"}]
    },{
      id:"02",
      name:"Project Anywhr",
      duration:"5 min",
      created:"3/11/22 3:00pm",
      updated:"3/11/22 3:00pm",
      members:[{name:"Jackswift"}]
    },{
      id:"03",
      name:"Superfye!",
      duration:"5 min",
      created:"3/11/22 3:00pm",
      updated:"3/10/22 11:00pm",
      members:[{name:"Jackswift"}]
    },{
      id:"04",
      name:"Pandora Bound",
      duration:"5 min",
      created:"3/11/22 3:00pm",
      updated:"3/9/22 5:45pm",
      members:[{name:"Jackswift"}]
    },/*{
      id:"05",
      name:"Project Anywhr",
      duration:"5 min",
      created:"3/11/22 3:00pm",
      updated:"3/11/22 3:00pm",
      members:[{name:"Jackswift"}]
    },{
      id:"06",
      name:"Superfye!",
      duration:"5 min",
      created:"3/11/22 3:00pm",
      updated:"3/10/22 11:00pm",
      members:[{name:"Jackswift"}]
    },{
      id:"07",
      name:"Pandora Bound",
      duration:"5 min",
      created:"3/11/22 3:00pm",
      updated:"3/9/22 5:45pm",
      members:[{name:"Jackswift"}]
    },*/
  ];
  rooms:SessionRoomPreview[] = [
    {
      id:'01',
      name:"smokebaby",
      rank:29,
      members:[{name:"DJ Monarch"}],
      duration:"6 hrs, 5 min",
      viewCt:1112,
      commentCt:56,
      img:"she-on-fireree.jpg",
      vid:"20211126_213747.mp4",
    },{
      id:'02',
      name:"big chillin",
      rank:59,
      members:[{name:"Jackswift"}],
      duration:"58 min",
      viewCt:1112,
      commentCt:56,
      img:"Biggie-in-the-studio.jpg",
      vid:"20211126_213833.mp4",
    },{
      id:'03',
      name:"advanced flex",
      rank:59,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"37 min",
      viewCt:1112,
      commentCt:56,
      img:"studio-1.jpeg",
      vid:"20220304_225731.mp4",
    },{
      id:'04',
      name:"fiesty freestyle",
      rank:59,
      members:[{name:"BreezeAwesome"},{name:"Two Chains"}],
      duration:"16 hrs, 52 min",
      viewCt:1112,
      commentCt:56,
      img:"JAMMING.jpg",
      vid:"20211126_213747.mp4",
    },{
      id:'05',
      name:"two more hits",
      rank:59,
      members:[{name:"AshBeeee"}],
      duration:"1 hr, 20 min",
      viewCt:1112,
      commentCt:56,
      img:"How-to-Start-a-Band.jpg",
      vid:"20211126_213833.mp4",
    },{
      id:'06',
      name:"the bar room, V2",
      rank:59,
      members:[{name:"SouthSide Slug"}],
      duration:"18 min",
      viewCt:1112,
      commentCt:56,
      img:"apricot-jam.jpg",
      vid:"20220304_225731.mp4",
    },
  ];
  constructor(private app:AppService){}
}