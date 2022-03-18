import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { QS_SessionComment } from '@qs-state';
import { QS_SessionsCommentsService } from '../qs-messages-reply.service';
import { QS_SessionsService } from '../qs-messages.service';

@Component({
  selector: 'qs-session-editor',
  templateUrl: './qs-session-editor.component.html',
  styleUrls: ['./qs-session-editor.component.scss'],
})
export class QS_SessionEditorComponent {
  title = "qs-session-editor";
  newComments:QS_SessionComment[] = [];
  blank = {type:"comment",body:"",user:"Jackswift"};
  sessionEditorForm:FormGroup;
  constructor(
    private sessions:QS_SessionsService,
    private comments:QS_SessionsCommentsService,
    private fb:FormBuilder){
    this.comments.newComment$.subscribe(comment => {
      this.newComments.push(comment);
      if(this.newComments.length == 9) this.newComments.shift();
    });
    this.sessionEditorForm = this.fb.group({
      type:['comment',Validators.required],
      body:['',Validators.required],
      user:['Jackswift',Validators.required],
    });
    //this.comments.addRandomComment();
  }
  get f(){return this.sessionEditorForm.controls;}
  submitForm(){
    const o = this.sessionEditorForm.value;
    this.comments.send(o);
    this.sessionEditorForm.reset(this.blank);
  }
}
