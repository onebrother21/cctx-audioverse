import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'concatHTML' })

export class ConcatHTMLStringsPipe implements PipeTransform {
  transform(content:string|string[]): string {
    return Array.isArray(content)?content.join(""):content;}
}