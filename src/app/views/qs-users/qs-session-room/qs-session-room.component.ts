import { Component,ViewChild,ElementRef } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SessionComment, SessionRoomPreview } from '@qs-state';
import { SessionsCommentsService } from '../qs-users-comments.service';
import { SessionsService } from '../qs-users.service';

@Component({
  selector: 'qs-session-room',
  templateUrl: './qs-session-room.component.html',
  styleUrls: ['./qs-session-room.component.scss'],
})
export class SessionRoomComponent {
  title = "qs-session-room";
  sessionId?:string|null;
  room?:SessionRoomPreview;
  newComments:SessionComment[] = [];
  blank = {type:"comment",body:"",user:"Jackswift"};
  @ViewChild('videoPlayer') videoplayer:ElementRef = {} as ElementRef;
  toggleVideo(event:any) {this.videoplayer.nativeElement.play();}
  sessionChatForm:FormGroup;
  constructor(
    private route:ActivatedRoute,
    private sessions:SessionsService,
    private comments:SessionsCommentsService,
    private fb:FormBuilder){
    this.sessionId = this.route.snapshot.paramMap.get('id');
    this.room = this.sessions.rooms.find(s => s.id == this.sessionId);
    this.comments.newComment$.subscribe(comment => {
      this.newComments.push(comment);
      if(this.newComments.length == 9) this.newComments.shift();
    });
    this.sessionChatForm = this.fb.group({
      action:['comment',Validators.required],
      body:['',Validators.required],
      user:['Jackswift',Validators.required],
    });
    this.comments.addRandomComment();
  }
  get f(){return this.sessionChatForm.controls;}
  submitForm(){
    const o = this.sessionChatForm.value;
    this.comments.send(o);
    this.sessionChatForm.reset(this.blank);
  }
  react(reaction:string){this.comments.send({user:'Jackswift',body:reaction});}
}
