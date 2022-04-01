export {};
/*
import { Component,ViewChild,ElementRef,AfterViewInit  } from "@angular/core";
import { Observable } from "rxjs";
import { 
  AppService,
  //AuthActions as Auth,
  
} from "@state";
import { NavigationActions as Navigation } from "@state";

@Component({
  selector:"oba-camera",
  templateUrl: "./camera.html",
  styleUrls:["camera.scss"],
})

export class CameraComponent implements AfterViewInit {
  @ViewChild("view",{static: false}) view:ElementRef;
  @ViewChild("output",{static: false}) output:ElementRef;
  @ViewChild("sensor",{static: false}) sensor:ElementRef;
  @ViewChild("trigger",{static: false}) trigger:ElementRef;
  // Set constraints for the video stream
  constraints = {video:{facingMode:"environment"},audio:false};
  permission = "";
  constructor(){}
  ngAfterViewInit() {
    this.cameraStart();
    console.log("ready");}
  cameraStart(){
    let stream;
    const handleError = error => console.log(error);
    const getMediaPermission = async () => {
      if("MozAnimation" in document.body.style){
        document.onfocus = () => {
        document.onfocus = null;
        if(!stream) Promise.reject(new Error("stream not defined")).catch(handleError);};}
      return await navigator.mediaDevices.getUserMedia(this.constraints);
    };
    getMediaPermission()
    .then(stream => {
        const track = stream.getTracks()[0];
        this.view.nativeElement.srcObject = stream;})
    .catch(handleError);
  }
    // Take a picture when cameraTrigger is tapped
  capture(){
    this.sensor.nativeElement.width = this.view.nativeElement.videoWidth;
    this.sensor.nativeElement.height = this.view.nativeElement.videoHeight;
    this.sensor.nativeElement.getContext("2d").drawImage(this.view.nativeElement,0,0);
    this.output.nativeElement.src = this.sensor.nativeElement.toDataURL("image/webp");
    this.output.nativeElement.classList.add("taken");
    }
}
*/