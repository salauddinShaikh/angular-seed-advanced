// angular
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';

// libs
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateLoader } from 'ng2-translate';

// app
//import { AppComponent } from './app/components/app.component';
import { AppComponent } from './app/components/app/app.component';
import { HomeComponent } from './app/components/home/home.component';
import { AboutComponent } from './app/components/about/about.component';
import { routes } from './app/components/app.routes';

// feature modules
import { CoreModule } from './app/frameworks/core/core.module';
import { AnalyticsModule } from './app/frameworks/analytics/analytics.module';
import { multilingualReducer, MultilingualEffects } from './app/frameworks/i18n/index';
import { MultilingualModule, translateFactory } from './app/frameworks/i18n/multilingual.module';
import { SampleModule } from './app/frameworks/sample/sample.module';
import { nameListReducer, NameListEffects } from './app/frameworks/sample/index';
import { timeSheetReducer, TimeSheetEffects, TimeSheetService } from './app/shared/services/timesheet.service';

// config
import { Config, WindowService, ConsoleService } from './app/frameworks/core/index';
Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;
if (String('<%= BUILD_TYPE %>') === 'dev') {
  // only output console logging in dev mode
  Config.DEBUG.LEVEL_4 = true;
}

// sample config (extra)
import { AppConfig } from './app/frameworks/sample/services/app-config';
import { MultilingualService } from './app/frameworks/i18n/services/multilingual.service';
// custom i18n language support
MultilingualService.SUPPORTED_LANGUAGES = AppConfig.SUPPORTED_LANGUAGES;

//Layout
import { FooterComponent } from './app/components/layout/footer/footer.component';
import { QuickSidebarComponent } from './app/components/layout/quick-sidebar/quick-sidebar.component';
import { SidebarComponent } from './app/components/layout/sidebar/sidebar.component';
import { TopNavigationBarComponent } from './app/components/layout/top-navigation-bar/top-navigation-bar.component';
import { IfAuthorize } from './app/components/shared/directives/ifAuthorize.directive';

//RMS
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { ScheduleModule, DataTableModule,SharedModule,ButtonModule,InputTextareaModule,CalendarModule,DropdownModule} from 'primeng/primeng';
import { LmsHolidaysComponent } from './app/components/lms/lms-holidays/lms-holidays.component';
import { LmsLeavesComponent } from './app/components/lms/lms-myleaves/lms-leaves.component';
import { LmsApproveLeavesComponent } from './app/components/lms/lms-approveleave/lms-approveleave.component';
import { LmsApplyLeavesComponent } from './app/components/lms/lms-applyleave/lms-applyleave.component';
import { LmsUpdateLeavesComponent } from './app/components/lms/lms-updateleave/lms-updateleave.component';
import { LmsBulkApproveComponent } from './app/components/lms/lms-bulkapproval/lms-bulkapproval.component';
import { LmsSingleApprovalComponent } from './app/components/lms/lms-singleapproval/lms-singleapproval.component';

import { MyTimesheetComponent } from './app/components/timesheet/my-timesheet/my-timesheet.component';
import { AddEditTimesheetComponent } from './app/components/timesheet/add-edit-timesheet/add-edit-timesheet.component';
import { ApproveTimesheetComponent } from './app/components/timesheet/approve-timesheet/approve-timesheet.component';
import { ViewApproveTimesheetComponent } from './app/components/timesheet/approve-timesheet/view-approve-timesheet.component';
import { ApprovedTimesheetComponent } from './app/components/timesheet/approved-timesheet/approved-timesheet.component';
import { ReportTimesheetComponent } from './app/components/timesheet/report-timesheet/report-timesheet.component';

import { ConferenceComponent } from './app/components/conferenceBooking/conference.component';
import { BookComponent } from './app/components/conferenceBooking/bookConference.component';
import { MyBookingComponent } from './app/components/conferenceBooking/myBooking.component';

let routerModule = RouterModule.forRoot(routes);

if (String('<%= TARGET_DESKTOP %>') === 'true') {
  Config.PLATFORM_TARGET = Config.PLATFORMS.DESKTOP;
  // desktop (electron) must use hash
  routerModule = RouterModule.forRoot(routes, {useHash: true});
}

declare var window, console;

// For AoT compilation to work:
export function win() {
  return window;
}
export function cons() {
  return console;
}

@NgModule({
  imports: [
    BrowserModule,
    CoreModule.forRoot([
      { provide: WindowService, useFactory: (win) },
      { provide: ConsoleService, useFactory: (cons) }
    ]),
    routerModule,
    AnalyticsModule,
    MultilingualModule.forRoot([{
      provide: TranslateLoader,
      deps: [Http],
      useFactory: (translateFactory)
    }]),
    SampleModule,
    StoreModule.provideStore({
      i18n: multilingualReducer,
      names: nameListReducer,
      timesheet: timeSheetReducer
    }),
    EffectsModule.run(MultilingualEffects),
    EffectsModule.run(TimeSheetEffects),    
    //EffectsModule.run(NameListEffects),
    ScheduleModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    InputTextareaModule,
    CalendarModule,
    DropdownModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    //Layout
    FooterComponent,
    QuickSidebarComponent,
    SidebarComponent,
    TopNavigationBarComponent,
    //RMS
    DashboardComponent,
    LmsLeavesComponent,
    LmsHolidaysComponent,
    LmsApplyLeavesComponent,
    LmsApproveLeavesComponent,
    LmsUpdateLeavesComponent,
    LmsBulkApproveComponent,
    LmsSingleApprovalComponent,
    MyTimesheetComponent,
    AddEditTimesheetComponent,
    ApproveTimesheetComponent,
    ViewApproveTimesheetComponent,
    ApprovedTimesheetComponent,
    ReportTimesheetComponent,
    IfAuthorize,
    ConferenceComponent,
    BookComponent,
    MyBookingComponent
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    },
    TimeSheetService
  ],
  bootstrap: [AppComponent]
})

export class WebModule { }
