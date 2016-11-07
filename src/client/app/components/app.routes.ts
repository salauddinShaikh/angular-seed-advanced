// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { DashboardRoutes } from './dashboard/dashboard.routes';
import { AppRoutes } from './app/app.routes';
import { LmsRoutes } from './lms/lms.routes';
import { TimesheetRoutes } from './timesheet/timesheet.routes';
import { CorporateRoutes } from './corporate/corporate.routes';
import { LoginRoutes } from './login/login.routes';
import { ErrorPagesRoutes } from './errorPages/errorPages.routes';
import { ProfileRoutes } from './profile/profile.routes';

export const routes: Array<any> = [
  ...HomeRoutes,
  ...AppRoutes,
  ...AboutRoutes,
  ...DashboardRoutes,
  ...LmsRoutes,
  ...TimesheetRoutes,
  ...CorporateRoutes,
  ...LoginRoutes,
  ...ErrorPagesRoutes,
  ...ProfileRoutes
];
