import { AppEntity } from '@state';
import { QS_User } from "./app-user.model";

export type QS_TaskAgent = QS_User;
export type QS_TaskTypes = {
  "onboarding":"Onboarding";
  "new-lead":"New Lead";
  "doc-review":"Doc Review";
  "course-proposal":"Proposal";
  "course-report":"Report";
  "tutor-inquiry":"Inquiry";
  "tutor-report":"Report";
  "tutor-payout":"Payout";
  "instructor-inquiry":"Inquiry";
  "instructor-payout":"Payout";
};
export const taskTypes:QS_TaskTypes = {
  "onboarding":"Onboarding",
  "new-lead":"New Lead",
  "doc-review":"Doc Review",
  "course-proposal":"Proposal",
  "course-report":"Report",
  "instructor-inquiry":"Inquiry",
  "instructor-payout":"Payout",
  "tutor-inquiry":"Inquiry",
  "tutor-report":"Report",
  "tutor-payout":"Payout",
};
export type QS_TaskType = keyof QS_TaskTypes;
export type QS_TaskName = {[k in QS_TaskType]:QS_TaskTypes[k]}[QS_TaskType];
export type QS_Task = AppEntity & {
  type:QS_TaskType|QS_TaskName;
  dueOn:Date;
  progress:number;
  agent?:QS_TaskAgent;
  notes?:string[];
};