import { DocEntity } from '../types';

export type UploadObj = DocEntity & {
  key:string;
  name:string;
  url:string;
  file:File;
};
export interface Upload extends UploadObj {}
export class Upload extends DocEntity {}