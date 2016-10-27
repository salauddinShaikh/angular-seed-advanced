import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// libs
import { Store, ActionReducer, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

// app
import { Config } from '../../frameworks/core/index';
import { Analytics, AnalyticsService } from '../../frameworks/analytics/index';


export interface ITimeSheet {
  id : string;
  project : string;
  task : string;
  status: string;
  startDate: string;
  endDate: string;
}

// analytics
const CATEGORY: string = 'TimeSheet';

/**
 * ngrx setup start --
 */
interface ITimeSheetActions {
  INIT: string;
  INITIALIZED: string;
  INIT_FAILED: string;
  ADD: string;
  NAME_ADDED: string;
}

export const TIME_SHEET_ACTIONS: ITimeSheetActions = {
  INIT: `${CATEGORY}_INIT`,
  INITIALIZED: `${CATEGORY}_INITIALIZED`,
  INIT_FAILED: `${CATEGORY}_INIT_FAILED`,
  ADD: `${CATEGORY}_ADD`,
  NAME_ADDED: `${CATEGORY}_NAME_ADDED`
};

export function timeSheetReducerFn(state: any = [], action: Action) {
  switch (action.type) {
    case TIME_SHEET_ACTIONS.INITIALIZED:
      return [...action.payload];
    case TIME_SHEET_ACTIONS.NAME_ADDED:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const timeSheetReducer: ActionReducer<any> = timeSheetReducerFn;
/**
 * ngrx end --
 */

@Injectable()
export class TimeSheetService extends Analytics {

  constructor(public analytics: AnalyticsService, private store: Store<any>) {
    super(analytics);
    this.category = CATEGORY;

    this.store.dispatch({ type: TIME_SHEET_ACTIONS.INIT });
  }
}

@Injectable()
export class TimeSheetEffects {

  @Effect() init$ = this.actions$
    .ofType(TIME_SHEET_ACTIONS.INIT)
    .switchMap(action => this.http.get(`${Config.IS_MOBILE_NATIVE() ? '/' : ''}assets/data.json`))
    .map(res => ({ type: TIME_SHEET_ACTIONS.INITIALIZED, payload: res.json() }))
    // nothing reacting to failure at moment but you could if you want (here for example)
    .catch(() => Observable.of({ type: TIME_SHEET_ACTIONS.INIT_FAILED }));

  @Effect() add$ = this.actions$
    .ofType(TIME_SHEET_ACTIONS.ADD)
    .map(action => {
      let name = action.payload;
      // analytics
      this.timeSheets.track(TIME_SHEET_ACTIONS.NAME_ADDED, { label: name });
      return ({ type: TIME_SHEET_ACTIONS.NAME_ADDED, payload: name });
    });

  constructor(private store: Store<any>, private actions$: Actions, private timeSheets: TimeSheetService, private http: Http) { }

}
