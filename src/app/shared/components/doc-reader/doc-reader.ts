import { Component,Input } from "@angular/core";

@Component({
  selector:"oba-doc-reader",
  templateUrl: "./doc-reader.html",
  styleUrls:["doc-reader.scss"],
})

export class DocumentReaderComponent {
  @Input() img = "";
  @Input() text = "";
}