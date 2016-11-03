import { ITimeSheetDay } from './timesheet/ITimesheet';
import { IHoliday } from './holiday/IHoliday';

export interface AppState {
  counter: number;
  timesheet: ITimeSheetDay[];
  holidays: IHoliday[]
}
