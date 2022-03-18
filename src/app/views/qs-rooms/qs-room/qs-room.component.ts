import { Component,ViewChild,ElementRef } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoomComment, Room } from '@qs-state';
import { RoomsCommentsService } from '../qs-rooms-comments.service';
import { RoomsService } from '../qs-rooms.service';

@Component({
  selector: 'qs-room',
  templateUrl: './qs-room.component.html',
  styleUrls: ['./qs-room.component.scss'],
})
export class RoomRoomComponent {
  title = "qs-room";
  roomId?:string|null;
  room?:Room;
  newComments:RoomComment[] = [];
  blank = {type:"comment",body:"",user:"Jackswift"};
  @ViewChild('videoPlayer') videoplayer:ElementRef = {} as ElementRef;
  toggleVideo(event:any){this.videoplayer.nativeElement.play();}
  roomChatForm:FormGroup;
  constructor(
    private route:ActivatedRoute,
    private rooms:RoomsService,
    private comments:RoomsCommentsService,
    private fb:FormBuilder){
    this.roomId = this.route.snapshot.paramMap.get('id');
    this.room = this.rooms.rooms.find(s => s.id == this.roomId);
    this.comments.newComment$.subscribe(comment => {
      this.newComments.push(comment);
      if(this.newComments.length == 9) this.newComments.shift();
    });
    this.roomChatForm = this.fb.group({
      action:['comment',Validators.required],
      body:['',Validators.required],
      user:['Jackswift',Validators.required],
    });
    this.comments.addRandomComment();
  }
  get f(){return this.roomChatForm.controls;}
  submitForm(){
    const o = this.roomChatForm.value;
    this.comments.send(o);
    this.roomChatForm.reset(this.blank);
  }
  react(reaction:string){this.comments.send({user:'Jackswift',body:reaction});}
}
