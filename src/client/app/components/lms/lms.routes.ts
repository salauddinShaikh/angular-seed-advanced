import { Route } from '@angular/router';
import { LmsHolidaysComponent } from './lms-holidays/lms-holidays.component';
import { LmsLeavesComponent } from './lms-myleaves/lms-leaves.component';
import { LmsApplyLeavesComponent } from './lms-applyleave/lms-applyleave.component';
import { LmsApproveLeavesComponent } from './lms-approveleave/lms-approveleave.component';

export const LmsRoutes: Route[] = [
  {
    path: 'holidays',
    component: LmsHolidaysComponent
  },
  {
    path: 'myleaves',
    component: LmsLeavesComponent
  },
  {
    path: 'applyleave',
    component: LmsApplyLeavesComponent
  },
  {
    path: 'approveleave',
    component: LmsApproveLeavesComponent
  }
];