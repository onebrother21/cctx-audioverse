import { Component,Output,EventEmitter,Input } from "@angular/core";

@Component({
  selector:"qs-numpad",
  templateUrl: "./numpad.component.html",
  styleUrls:["numpad.component.scss"]
})

export class NumberPadComponent {
  @Output() select = new EventEmitter<string>();
  @Input() clear?:EventEmitter<any>;
  @Input() config = {masked:false,min:4,max:4};
  val = "";
  mask:string[] = [];
  nums = [1,2,3,4,5,6,7,8,9,"Clear",0,"OK"];
  isSet = false;
  ngOnInit(){this.clear?.subscribe(() => this.reset());}
  validate(){return this.val.length >= this.config.min && this.val.length <= this.config.max;}
  update(n:string|number){
    switch(true){
      case n == "Clear":this.val = this.val.slice(0,this.val.length - 1);break;
      case isFinite(Number(n)):this.val = this.val + n.toString();break;
      default:return;
    }
    this.mask = this.val.split("");
    this.validate()?this.send():null;
  }
  send(){
    this.isSet = true;
    setTimeout(() => {this.select.emit(this.val);},200);
  }
  reset(){
    this.val = "";
    this.mask = [];
    this.isSet = false;
  }
}