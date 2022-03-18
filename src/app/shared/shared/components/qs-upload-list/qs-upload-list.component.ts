import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '@qs-state';
import { map, tap } from 'rxjs';

@Component({
  selector: 'qs-upload-list',
  templateUrl: './qs-upload-list.component.html',
  styleUrls: ['./qs-upload-list.component.scss']
})
export class QS_UploadListComponent implements OnInit {
  fileUploads:any[] = [];
  constructor(private uploadService: FileUploadService) { }
  ngOnInit(): void {
    this.uploadService.getFiles(6).snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))))
      .subscribe(fileUploads => this.fileUploads = fileUploads);
  }
}