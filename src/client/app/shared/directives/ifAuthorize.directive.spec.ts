import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { IfAuthorize } from './ifAuthorize.directive';
import { LoginService } from '../services/login.service';
import { t } from '../../frameworks/test/index';

const testModuleConfig = () => {
    TestBed.configureTestingModule({
        declarations: [IfAuthorize, TestComponent],
    });
};

@Component({
    viewProviders: [
        { provide: LoginService, useClass: LoginMock }
    ],
    selector: 'test-cmp',
    template: `<div class="directive"><div [ifAuthorize]="['Timesheets.READ']"><span>hii</span></div>`
})
class TestComponent { }

export function main() {
    t.describe('Shared: ifAuthorizeDirective', () => {
        t.be(testModuleConfig);
        t.beforeEach(() => {
            var store = {loggedInUserPermission:'["Timesheets.READ"]'};

            t.spyOn(localStorage, 'getItem').andCallFake((key) => {
                return store[key];
            });
            t.spyOn(localStorage, 'setItem').andCallFake((key, value) => {
                return store[key] = value + '';
            });
        });
        t.it('should have directive class', t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    let fixture = TestBed.createComponent(TestComponent);
                    fixture.detectChanges();
                    t.expect(fixture.nativeElement.querySelectorAll('.directive').length).toBe(1);
                });
        }));
        t.it('should have span tag present', t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    let fixture = TestBed.createComponent(TestComponent);
                    fixture.detectChanges();
                    t.expect(fixture.nativeElement.querySelectorAll('.span').length).toBe(1);
                });
        }));
    });
}

class LoginMock {
    public getAuthEmitter() {
        return;
    }
};
