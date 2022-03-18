import { Component, Input } from '@angular/core';
import { FileUpload, FileUploadService } from '@qs-state';

@Component({
  selector: 'qs-upload-details',
  templateUrl: './qs-upload-details.component.html',
  styleUrls: ['./qs-upload-details.component.scss']
})
export class QS_UploadDetailsComponent {
  @Input() fileUpload?:FileUpload;
  constructor(private uploadService: FileUploadService) { }
  deleteFileUpload(file?:FileUpload): void {file?this.uploadService.deleteFile(file):null;}
}