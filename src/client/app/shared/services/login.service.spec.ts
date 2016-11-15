import { TestBed, inject } from '@angular/core/testing';
import { LoginService } from './login.service';
import { CustomAnalytics, AnalyticsService } from '../../frameworks/analytics/index';
//import { Response, Http, Headers, RequestOptions } from '@angular/http';
import {
    Response, Headers, ResponseOptions,
    BaseRequestOptions,
    ConnectionBackend,
    Http
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { t } from '../../frameworks/test/index';

const testModuleConfig = () => {
    TestBed.configureTestingModule({
        providers: [
            CustomAnalytics, AnalyticsService, LoginService, BaseRequestOptions,
            MockBackend,
            {
                provide: Http, useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
                    return new Http(backend, defaultOptions);
                },
                deps: [MockBackend, BaseRequestOptions]
            }
        ]
    });
};

export function main() {
    t.describe('Service:LoginService', () => {
        t.be(testModuleConfig);
        t.it('should return false', inject([LoginService], (service: LoginService) => {
            t.expect(service.isAuthenticated()).toBeFalsy();
        }));
        t.it('should authenticate', inject([LoginService, MockBackend], (service: LoginService, mockBackend: MockBackend) => {
            mockBackend.connections.subscribe((connection: MockConnection) => {
                let options = new ResponseOptions({
                    body: JSON.stringify({ success: true })
                });
                connection.mockRespond(new Response(options));
            })
            service.authenticate({ username: 'admin', password: 'secret' })
                .subscribe((response:any) => {
                    t.e(response.json()).toEqual({ success: true });
                });
        }));

    });
};
