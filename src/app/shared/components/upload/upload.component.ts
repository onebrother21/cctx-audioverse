import { Component } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { Upload,UploadService } from '@state';

@Component({
  selector: 'qs-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  title = 'upload';
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