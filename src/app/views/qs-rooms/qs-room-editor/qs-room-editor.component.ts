import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { RoomsService } from '../qs-rooms.service';

@Component({
  selector: 'qs-room-editor',
  templateUrl: './qs-room-editor.component.html',
  styleUrls: ['./qs-room-editor.component.scss'],
})
export class RoomEditorComponent {
  title = "qs-room-editor";
  roomEditorForm:FormGroup;
  loading:boolean = false;
  constructor(private rooms:RoomsService,private fb:FormBuilder){
    this.rooms.loading.subscribe(loading => this.loading = loading);
    this.roomEditorForm = this.fb.group({
      //action:['roomEditor',Validators.required],
      username:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      age:['',Validators.required],
      hometown:['',Validators.required],
    });
  }
  get f(){return this.roomEditorForm.controls;}
  submitForm(){
    const {firstname,lastname,..._o} = this.roomEditorForm.value;
    const o = {..._o,name:{first:firstname,last:lastname}};
    this.rooms.send(o);
    this.roomEditorForm.reset({
      //action:"roomEditor",
      username:"",
      firstname:"",
      lastname:"",
      age:"",
      hometown:"",
    });
  }
}
