import { Injector } from '@angular/core';
import { BaseComponent, Config } from '../../frameworks/core/index';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { NameListService } from '../../frameworks/sample/services/name-list.service';
import { TimeSheetService } from '../../shared/services/timesheet.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../domain/appState';
import { ITimeSheetDay } from '../../domain/timesheet/ITimesheet';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {
  private heroesUrl = 'http://localhost:4000/ping';
  // Just one way you could handle the {N} `ui/page` Page class
  // in a shared component...
  private _page: any;
  private timesheetRecords;
  private get page() {
    if (Config.PageClass) {
      if (!this._page) {
        this._page = this.injector.get(Config.PageClass);
      }

      return this._page;
    }
  }

  constructor(private store: Store<AppState>, private injector: Injector, private http: Http, private timesheetService: TimeSheetService, private timesheetServie: TimeSheetService) {
    store.select('timesheet')
      .subscribe(test => {
        this.timesheetRecords = test;
      });
  }

  ngOnInit() {
    console.log('Init', this.timesheetRecords);
  }

  getDataFromServer() {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
