
export interface ITimeSheetDay {
  id: string;
  date: string;
  billableHours: string;
  nonBillableHours: string;
  name : string;
}

export interface ITimeSheetWeek {
  id: string;
  date: string;
  status: string;
  taskId: string;
  projectId: string;
  tasks: ITimeSheetDay[];
}

export interface ITimeSheetUserWeekly {
  id: string;
  project: string;
  tasks: ITimeSheetWeek[];
  status: string;
  startDate: string;
  endDate: string;
}

