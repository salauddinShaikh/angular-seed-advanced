// angular
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// libs
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


// app
//import { AppComponent } from './app/components/app.component';
import { AppComponent } from './app/components/app/app.component';
import { HomeComponent } from './app/components/home/home.component';
import { AboutComponent } from './app/components/about/about.component';
import { routes } from './app/components/app.routes';

// feature modules
import { CoreModule } from './app/frameworks/core/core.module';
import { CommonModule } from './app/shared/index';
import { AnalyticsModule } from './app/frameworks/analytics/analytics.module';
import { multilingualReducer, MultilingualEffects } from './app/frameworks/i18n/index';
import { SampleModule } from './app/frameworks/sample/sample.module';
import { nameListReducer, NameListEffects } from './app/frameworks/sample/index';


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

//RMS
import { DashboardComponent } from './app/components/dashboard/dashboard.component';

import { LmsHolidaysComponent } from './app/components/lms/lms-holidays/lms-holidays.component';
import { LmsLeavesComponent } from './app/components/lms/lms-myleaves/lms-leaves.component';
import { LmsApproveLeavesComponent } from './app/components/lms/lms-approveleave/lms-approveleave.component';
import { LmsApplyLeavesComponent } from './app/components/lms/lms-applyleave/lms-applyleave.component';
import { LmsUpdateLeavesComponent } from './app/components/lms/lms-updateleave/lms-updateleave.component';
import { LmsBulkApproveComponent } from './app/components/lms/lms-bulkapproval/lms-bulkapproval.component';
import { LmsSingleApprovalComponent } from './app/components/lms/lms-singleapproval/lms-singleapproval.component';

import {TimesheetModule} from './app/components/timesheet/index';

import { CorporateModule } from './app/components/corporate/index';
import { ProfileModule } from './app/components/profile/index';
import { AdminModule } from './app/components/admin/index';

import { LoginComponent } from './app/components/login/login.component';
import { UnauthorizedAccessComponent } from './app/components/errorPages/unauthorizedAccess/unauthorizedAccess.component';

import { ChangePasswordComponent } from './app/components/changePassword/change-password.component';

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
    CommonModule,
    routerModule,
    AnalyticsModule,
    SampleModule,
    StoreModule.provideStore({
      i18n: multilingualReducer,
      names: nameListReducer,
    }),
    EffectsModule.run(MultilingualEffects),
    EffectsModule.run(NameListEffects),
    TimesheetModule,
    CorporateModule,
    ProfileModule,
    AdminModule
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
    LoginComponent,
    UnauthorizedAccessComponent,
    ChangePasswordComponent
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    },
  ],
  bootstrap: [AppComponent]
})

export class WebModule { }
