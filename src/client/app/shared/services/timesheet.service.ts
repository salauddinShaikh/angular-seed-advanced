import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// libs
import { Store, ActionReducer, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

// app
import { Analytics, AnalyticsService } from '../../frameworks/analytics/index';

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
            console.log('Initalized TimeSheet');
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
export class TimeSheetService extends Analytics {
    constructor(public analytics: AnalyticsService, private store: Store<AppState>) {
        super(analytics);
        this.category = CATEGORY;
        this.store.dispatch({ type: TIME_SHEET_ACTIONS.INIT });
    }
}

@Injectable()
export class TimeSheetEffects {
    @Effect() getTimesheets$: Observable<Action> = this.actions$
        .ofType(TIME_SHEET_ACTIONS.INIT)
        .switchMap(action1 => {
            return this.http.get('http://localhost:4000/getTimesheets')
        })
        .map(res => ({ type: TIME_SHEET_ACTIONS.INITIALIZED, payload: res.json() }))
        .catch(() => Observable.of({ type: TIME_SHEET_ACTIONS.INIT_FAILED }));

    constructor(private actions$: Actions, private timeSheets: TimeSheetService, private http: Http) {
        console.log('init TSF');
    }
}
