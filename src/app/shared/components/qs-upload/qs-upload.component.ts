import { Component } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { Upload,UploadService } from '@qs-state';

@Component({
  selector: 'qs-upload',
  templateUrl: './qs-upload.component.html',
  styleUrls: ['./qs-upload.component.scss'],
})
export class UploadComponent {
  title = 'qs-upload';
  selectedFiles?:FileList;
  currentUpload?:Upload;
  percentage?:number;
  constructor(private uploadService:UploadService) { }
  selectFile(event:any):void {this.selectedFiles = event.target.files;}
  upload():void {
    const file = this.selectedFiles?.item(0);
    this.selectedFiles = undefined;
    if(file){
      this.currentUpload = new Upload(file);
      this.uploadService.pushFileToStorage(this.currentUpload).pipe(
        tap(percentage => this.percentage = Math.round(percentage||0)),
        catchError(error => of(console.log(error))));
    }
  }
}