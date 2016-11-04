import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// libs
import { Store, ActionReducer, Action } from '@ngrx/store';

// app
import { AnalyticsService, CustomAnalytics } from '../../frameworks/analytics/index';

import { IHoliday } from '../../domain/holiday/IHoliday';
import { AppState } from '../../domain/appState';

// analytics
const CATEGORY: string = 'Holiday';

interface IHolidayActions {
    INIT: string;
    INITIALIZED: string;
    INIT_FAILED: string;
}

export const HOLIDAY_ACTIONS: IHolidayActions = {
    INIT: `${CATEGORY}_INIT`,
    INITIALIZED: `${CATEGORY}_INITIALIZED`,
    INIT_FAILED: `${CATEGORY}_INIT_FAILED`,
};

export function holidayReducerFn(state: IHoliday[] = [], action: Action) {
    switch (action.type) {
        case HOLIDAY_ACTIONS.INITIALIZED:
            return [...action.payload];
        default:
            return state;
    }
};

export const holidayReducer: ActionReducer<IHoliday[]> = holidayReducerFn;

@Injectable()
export class HolidayService extends CustomAnalytics {
    constructor(public analytics: AnalyticsService, public store: Store<AppState>, public http: Http) {
        super(analytics, http);
        this.category = CATEGORY;
        //this.store.dispatch({ type: HOLIDAY_ACTIONS.INIT });
    }

    getHolidays(): void {
        let store = this.store;
        this.httpGet('api/getHolidays', function (data: any) {
            store.dispatch({ type: HOLIDAY_ACTIONS.INITIALIZED, payload: data });
        });
    }
}
