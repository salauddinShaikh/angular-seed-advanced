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
    t.it('TC_124 : To check what are the contents under Nominee Details',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_125 : To check whether edit icon is clickable Or not',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_126 : To check what is displayed on the Screen after clicking edit icon',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_127 : To check whether it is mandatory or not',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_129 : To check whether Submit button Works or not when  clicked ',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_130 : To check whether tick on the check box Is compulsory or not',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_131 : To check whether validations are Provided or not when  clicked on Submit button with blank fields',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_132 :To check whether what happens when Clicked on Submit Button ',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));
    t.it('TC_133 : To check whether Cancel Button is Clickable or not',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));
    t.it('TC_134 : To check what happens when clicked On Cancel button',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));
    t.it('TC_135 : To check what is status before Editing the address column',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));
    t.it('TC_136 : To check what is the status after Editing the address and clicking On submit button',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));
};

@Component({
    selector: 'test-cmp',
    template: '<nominees></nominees>'
})
class TestComponent { }
