import { Component,ViewChild,ElementRef } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QS_SessionComment, QS_SessionRoomPreview } from '@qs-state';
import { QS_SessionsCommentsService } from '../qs-sessions-comments.service';
import { QS_SessionsService } from '../qs-sessions.service';

@Component({
  selector: 'qs-session-room',
  templateUrl: './qs-session-room.component.html',
  styleUrls: ['./qs-session-room.component.scss'],
})
export class QS_SessionRoomComponent {
  title = "qs-session-room";
  sessionId?:string|null;
  room?:QS_SessionRoomPreview;
  newComments:QS_SessionComment[] = [];
  blank = {type:"comment",body:"",user:"Jackswift"};
  @ViewChild('videoPlayer') videoplayer:ElementRef = {} as ElementRef;
  toggleVideo(event:any) {this.videoplayer.nativeElement.play();}
  sessionChatForm:FormGroup;
  constructor(
    private route:ActivatedRoute,
    private sessions:QS_SessionsService,
    private comments:QS_SessionsCommentsService,
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
