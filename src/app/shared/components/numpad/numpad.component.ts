import { Component,Output,EventEmitter,Input } from "@angular/core";

@Component({
  selector:"qs-numpad",
  templateUrl: "./numpad.component.html",
  styleUrls:["numpad.component.scss"]
})

export class NumberPadComponent {
  @Output() value = new EventEmitter<string>();
  @Input() set clear(clear:boolean){this.reset();};
  @Input() set config(config:{masked:boolean;min:number;max:number}){this.config_ = config;};
  config_ = {masked:false,min:4,max:4};
  val = "";
  mask:string[] = [];
  nums = [1,2,3,4,5,6,7,8,9,"Clear",0,"OK"];
  isSet = false;
  validate(){return this.val.length >= this.config_.min && this.val.length <= this.config_.max;}
  update(n:string|number){
    if(this.isSet) return;
    switch(true){
      case n == "Clear":this.val = this.val.slice(0,this.val.length - 1);break;
      case typeof n == "number":this.val = this.val + n.toString();break;
      default:return;
    }
    this.mask = this.val.split("");
    this.validate()?this.send():null;
  }
  reset(){this.val = "";this.mask = [];this.isSet = false;}
  send(){
    setTimeout(() => {
      this.isSet = true;
      this.value.emit(this.val);
    },200);
  }
}