import { ITimeSheetDay } from './timesheet/ITimesheet';

export interface AppState {
  counter: number;
  timesheet: ITimeSheetDay[];
}