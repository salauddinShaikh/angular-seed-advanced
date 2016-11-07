import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// libs
import { Store, ActionReducer, Action } from '@ngrx/store';

// app
import { CustomAnalytics, AnalyticsService } from '../../frameworks/analytics/index';

import { AppState } from '../../domain/appState';
import { ITimeSheetDay } from '../../domain/timesheet/ITimesheet';


// analytics
const CATEGORY: string = 'TimeSheet';

/**
 * ngrx setup start --
 */
interface ITimeSheetActions {
    INIT: string;
    INITIALIZED: string;
    INIT_FAILED: string;
}

export const TIME_SHEET_ACTIONS: ITimeSheetActions = {
    INIT: `${CATEGORY}_INIT`,
    INITIALIZED: `${CATEGORY}_INITIALIZED`,
    INIT_FAILED: `${CATEGORY}_INIT_FAILED`,
};

export function timeSheetReducerFn(state: ITimeSheetDay[] = [], action: Action) {
    switch (action.type) {
        case TIME_SHEET_ACTIONS.INITIALIZED:
            return [...action.payload];
        default:
            return state;
    }
};

export const timeSheetReducer: ActionReducer<ITimeSheetDay[]> = timeSheetReducerFn;
/**
 * ngrx end --
 */

@Injectable()
export class TimeSheetService extends CustomAnalytics {
    constructor(public analytics: AnalyticsService, public store: Store<AppState>, public http: Http) {
        super(analytics, http);
        this.category = CATEGORY;
        this.store.dispatch({ type: TIME_SHEET_ACTIONS.INIT });
    }

    getCurrentUserTimesheets(): void {
        let store = this.store;
        this.httpGet('getTimesheets', function (data: any) {
            store.dispatch({ type: TIME_SHEET_ACTIONS.INITIALIZED, payload: data });
        });
    }
}

