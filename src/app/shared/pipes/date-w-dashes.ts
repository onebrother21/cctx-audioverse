import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dateWithDashes' })

export class DateWithDashesPipe implements PipeTransform {
  transform(date:string|Date): string {
    const d = (date instanceof Date?date:new Date(date)) as Date,
    day = d.getDate(),
    month = d.getMonth() + 1,
    yr = d.getFullYear();
    return `${day}-${month}-${yr}`;}
}