import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// libs
import { Store, ActionReducer, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

// app
import { Analytics, AnalyticsService } from '../../frameworks/analytics/index';

import { IHoliday } from '../../domain/holiday/IHoliday';
import { AppState } from '../../domain/appState';

// analytics
const CATEGORY: string = 'Holiday';

export interface IHolidayState {
  holidays: IHoliday[];
}

const initialState: IHolidayState = {
  holidays: []
};


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

//export function holidayReducerFn(state: IHoliday[] = [], action: Action) {
export function holidayReducerFn(state: IHolidayState = initialState, action: Action) {
    switch (action.type) {
        case HOLIDAY_ACTIONS.INITIALIZED:
            console.log('Initialized Holiday');
            //return [...action.payload];
            return state;
        default:
            return state;
    }
};

export const holidayReducer: ActionReducer<IHolidayState> = holidayReducerFn;

@Injectable()
export class HolidayService extends Analytics {
    constructor(public analytics: AnalyticsService, private store: Store<AppState>) {
        super(analytics);
        this.category = CATEGORY;
        this.store.dispatch({ type: HOLIDAY_ACTIONS.INIT });
    }
}

@Injectable()
export class HolidayEffects {
    @Effect() initHolidays$: Observable<Action> = this.actions$
        .ofType(HOLIDAY_ACTIONS.INIT)
        .switchMap(action1 => {
            return this.http.get('http://localhost:4000/getHolidays');
        })
        .map(res => ({ type: HOLIDAY_ACTIONS.INITIALIZED, payload: res.json() }))
        .catch(() => Observable.of({ type: HOLIDAY_ACTIONS.INIT_FAILED }));
    constructor(private actions$: Actions, private holidayService: HolidayService, private http: Http, private store: Store<any>) { }
}
