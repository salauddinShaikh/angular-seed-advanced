import { Route } from '@angular/router';
import { MyTimesheetComponent } from './my-timesheet/my-timesheet.component';
import { AddEditTimesheetComponent } from './add-edit-timesheet/add-edit-timesheet.component';
import { ApproveTimesheetComponent } from './approve-timesheet/approve-timesheet.component';
import { ApprovedTimesheetComponent } from './approved-timesheet/approved-timesheet.component';
import { ReportTimesheetComponent } from './report-timesheet/report-timesheet.component';
import { ViewApproveTimesheetComponent } from './approve-timesheet/view-approve-timesheet.component';

export const TimesheetRoutes: Route[] = [
  {
    path: 'my-timesheet',
    component: MyTimesheetComponent
  },{
    path: 'add-edit-timesheet',
    component: AddEditTimesheetComponent
  },{
    path: 'approve-timesheet',
    component: ApproveTimesheetComponent
  },{
    path: 'approved-timesheet',
    component: ApprovedTimesheetComponent
  },{
    path: 'report-timesheet',
    component: ReportTimesheetComponent
  },{
    path: 'view-approve-timesheet',
    component: ViewApproveTimesheetComponent
  }
];