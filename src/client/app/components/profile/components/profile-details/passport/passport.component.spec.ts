import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { t } from '../../../../../frameworks/test/index';

import { PassportComponent } from './passport.component';

const testModuleConfig = () => {
    TestBed.configureTestingModule({
        declarations: [
            TestComponent, PassportComponent,
        ]
    });
};

export function main() {

    t.describe('Component: PassportComponent', () => {
        t.be(testModuleConfig);
        t.it('should have a defined component', () => {
            t.it('should build without a problem',
                t.async(() => {
                    TestBed.compileComponents()
                        .then(() => {
                            let fixture = TestBed.createComponent(TestComponent);
                            fixture.detectChanges();
                            t.e(TestComponent).toBeDefined();
                        });
                }));
        });
    });
    t.it('TC_92 : To check what are the contents under Passport details',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_93 : To check whether edit icon is clickable Or not',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_94 : To check what is displayed on the Screen after clicking edit icon',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_95 : To check whether Submit button Works or not when  clicked',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_96 : To check whether what happens when Clicked on Submit Button ',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_97 : To check whether Cancel Button is Clickable or not',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_98 : To check what happens when clicked On Cancel button',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_99 : To check what is status before Editing the address column',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));
    t.it('TC_100 : To check what is the status after Editing the address and clicking On submit button',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));
    t.it('TC_101 : To check whether HR comments field Is mandatory to be filled or not',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));
};

@Component({
    selector: 'test-cmp',
    template: '<passport></passport>'
})
class TestComponent { }
