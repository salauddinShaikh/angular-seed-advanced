// angular
import { ChangeDetectionStrategy, OnInit, EventEmitter } from '@angular/core';

// app
import { AnalyticsService } from '../../frameworks/analytics/index';
import { BaseComponent, Config, LogService } from '../../frameworks/core/index';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';
/**
 * This class represents the main application component.
 */
@BaseComponent({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  changeDetection: ChangeDetectionStrategy.Default // Everything else uses OnPush
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean;
  subscription: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private loginService: LoginService, public analytics: AnalyticsService, public logger: LogService, private _router: Router) {
    logger.debug(`Config env: ${Config.ENVIRONMENT().ENV}`);
  }

  ngOnInit() {
    window['App'].init();
    window['Layout'].init();
    window['Demo'].init();
    window['QuickSidebar'].init();
    this.isAuthenticated = this.loginService.isAuthenticated();
    this.subscription = this.loginService.getAuthEmitter()
      .subscribe((value: boolean) => { this.isAuthenticated = value; });
  }
}
