import { HttpRequest } from '@angular/common/http';
import { CommonUtils as Utils } from '../common';
import {
  MockApiDBHelpers as DB,
  MockApiHandlers as Handlers,
  MockApiLogger as Logger,
  MockBackendNotifier
} from '../utils';
import { db } from '../db';
import { LayoutContent } from '../models';

export class LayoutController {
  static notifier:MockBackendNotifier;
  static fetch = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return Handlers.ok(db.layoutContent as LayoutContent);
  };
}