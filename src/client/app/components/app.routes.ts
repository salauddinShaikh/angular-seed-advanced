// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { DashboardRoutes } from './dashboard/dashboard.routes';
import { AppRoutes } from './app/app.routes';
import { LmsRoutes } from './lms/lms.routes';
import { TimesheetRoutes } from './timesheet/timesheet.routes';
import { ConferenceRoutes } from './conferenceBooking/conference.routes';
import { LoginRoutes } from './login/login.routes';
import { ErrorPagesRoutes } from './errorPages/errorPages.routes';

export const routes: Array<any> = [
  ...HomeRoutes,
  ...AppRoutes,
  ...AboutRoutes,
  ...DashboardRoutes,
  ...LmsRoutes,
  ...TimesheetRoutes,
  ...ConferenceRoutes,
  ...LoginRoutes,
  ...ErrorPagesRoutes
];
