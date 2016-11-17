import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router} from '@angular/router';
import { RouterTestingModule} from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { t } from '../../frameworks/test/index';
import { LoginService } from '../../shared/services/login.service';

var isLogin = false;

export function main() {

    t.describe('Component: TopNavigationBarComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [RouterTestingModule],
                declarations: [LoginComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: LoginService, useValue: MockLoginService },
                    { provide: Router, useClass: RouterStub }
                ]
            });
        });
        t.it('should have a defined component',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.e(fixture.nativeElement).toBeTruthy();
                        t.e(TestComponent).toBeDefined();
                    });
            }));
        t.it('TC_01: Employee should enter Correct url to get the login page.',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_02: Employee should enter Valid user name and Password.',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_03: The validation should be Provided if entered invalid User name and password.',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_04: If entered invalid user name and Password then log in should get Refreshed.',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_05: If click on Log In Button or clicked On Enter key then the user Should get logged in.',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        componentInstance.doLogin();
                        t.expect(isLogin).toBe(true);
                    });
            }));
        t.it('should call getLoggedInUserPermission',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        isLogin=false;
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        componentInstance.getLoggedInUserPermission();
                        t.expect(isLogin).toBe(true);
                    });
            }));
        t.it('TC_06: If clicked on cancel, the page Should through an error.',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_07: After successful Log in , the user Should be able to see home page.',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
    });
};


@Component({
    selector: 'test-cmp',
    template: '<login-component></login-component>'
})
class TestComponent { }
class MockLoginService {
    public authenticate() {
        isLogin = true;
    }
    public getLoggedInUserPermission() {
       isLogin = true;
    }
}
class RouterStub {
    navigate(url: any) { return url; }
}