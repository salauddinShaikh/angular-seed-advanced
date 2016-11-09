/** Angular Dependencies */
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateLoader } from 'ng2-translate';

/** Third party Dependencies */
import { StoreModule } from '@ngrx/store';

import { ScheduleModule, DataTableModule, SharedModule, ButtonModule, InputTextareaModule, CalendarModule, DropdownModule, DialogModule, ConfirmDialogModule, GrowlModule, ConfirmationService, ProgressBarModule } from 'primeng/primeng';
import { NotificationComponent } from './components/notification/notification.component';

/** Framework Dependencies */
import { MultilingualModule, translateFactory } from '../frameworks/i18n/multilingual.module';

/** Module Level Dependencies */
import { timeSheetReducer, TimeSheetService } from './services/timesheet.service';
import { holidayReducer, HolidayService } from './services/holiday.service';
import { LoginService } from './services/login.service';
import { IfAuthorize } from './directives/ifAuthorize.directive';


let translate = MultilingualModule.forRoot([{
    provide: TranslateLoader,
    deps: [Http],
    useFactory: (translateFactory)
}]);

let primeNgComponents = [
    ScheduleModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    InputTextareaModule,
    CalendarModule,
    DropdownModule,
    DialogModule,
    ConfirmDialogModule,
    GrowlModule,
    ProgressBarModule
];

/**
 * Imports Declaration
 */
let imports = [StoreModule.provideStore({
    timesheet: timeSheetReducer,
    holidays: holidayReducer
}),
    translate];

/**  Exported components declaration   */
let exportComponents = [
    IfAuthorize,
    NotificationComponent,
    ...primeNgComponents
];

/**
 * Components/ Directives declaration
 */
let declarations = [
    IfAuthorize,
    NotificationComponent,
];

/**
 * Providers Declaration
 */
let providers = [TimeSheetService, HolidayService, LoginService, ConfirmationService];

/** Module Definition */
@NgModule({
    imports,
    exports: exportComponents,
    declarations,
    providers,
})
export class CommonModule { }

/** Export Translation Module */
export var TranslateModule = MultilingualModule.forRoot([{
    provide: TranslateLoader,
    deps: [Http],
    useFactory: (translateFactory)
}]);
