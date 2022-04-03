import { CommonUtils as Utils,DocEntity } from '../common';
import { UserId } from "./user.model";

export type TaskAgent = UserId;
export type TaskTypes = {
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
export const taskTypes:TaskTypes = {
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
export type TaskType = keyof TaskTypes;
export type TaskName = {[k in TaskType]:TaskTypes[k]}[TaskType];
export type TaskObj = DocEntity & {
  type:TaskType|TaskName;
  dueOn:Date;
  progress:number;
  agent?:TaskAgent;
  notes?:string[];
};
export interface Task extends TaskObj {}
export class Task extends DocEntity {json(){return {...this};}}