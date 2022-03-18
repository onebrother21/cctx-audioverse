import { OrdinalDayPipe } from './ordinal-day';
import { LongSpaceDatePipe } from './long-space-date';
import { DateWithDashesPipe } from './date-w-dashes';
import { ConcatHTMLStringsPipe } from './concat-html-strings';
import { SafeHtmlPipe } from './safe-html.pipe';

export const PIPES = [
  OrdinalDayPipe,
  LongSpaceDatePipe,
  DateWithDashesPipe,
  ConcatHTMLStringsPipe,
  SafeHtmlPipe,
];