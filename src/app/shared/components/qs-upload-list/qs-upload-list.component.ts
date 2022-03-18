import { Component, OnInit } from '@angular/core';
import { UploadService } from '@state';
import { map, tap } from 'rxjs';

@Component({
  selector: 'qs-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.scss']
})
export class UploadListComponent implements OnInit {
  fileUploads:any[] = [];
  constructor(private uploadService:UploadService) { }
  ngOnInit(): void {
    this.uploadService.getFiles(6).snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))))
      .subscribe(fileUploads => this.fileUploads = fileUploads);
  }
}