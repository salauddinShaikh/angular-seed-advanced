import { Route } from '@angular/router';
import { LmsHolidaysComponent } from './lms-holidays/lms-holidays.component';
import { LmsLeavesComponent } from './lms-myleaves/lms-leaves.component';
import { LmsApplyLeavesComponent } from './lms-applyleave/lms-applyleave.component';
import { LmsApproveLeavesComponent } from './lms-approveleave/lms-approveleave.component';
import { LmsUpdateLeavesComponent } from './lms-updateleave/lms-updateleave.component';
import { LmsBulkApproveComponent } from './lms-bulkapproval/lms-bulkapproval.component';
import { LmsSingleApprovalComponent } from './lms-singleapproval/lms-singleapproval.component';

export const LmsRoutes: Route[] = [
  {
    path: 'holidays',
    component: LmsHolidaysComponent
  },
  {
    path: 'my-leaves',
    component: LmsLeavesComponent
  },
  {
    path: 'apply-leave',
    component: LmsApplyLeavesComponent
  },
  {
    path: 'approve-leave',
    component: LmsApproveLeavesComponent
  },
  {
    path: 'bulk-approval',
    component: LmsBulkApproveComponent
  },
  {
    path: 'update-leave',
    component: LmsUpdateLeavesComponent
  },
  {
    path: 'single-approval',
    component: LmsSingleApprovalComponent
  }
];
