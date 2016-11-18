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
    t.it('TC_102 : To check what are the contents under Visa details',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_103 : To check whether edit icon is clickable Or not',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_104 : To check what is displayed on the Screen after clicking edit icon',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_105 : To check what happens after clicking On Add visa  information link',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_106 : To check what are the contents under Visa Details ',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_107 : To check whether Submit button Works or not when  clicked',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_108 : To check whether what happens when Clicked on Submit Button ',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_109 : To check whether Cancel Button is Clickable or not',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));
    t.it('TC_110 :To check what happens when clicked On Cancel button',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));
    t.it('TC_111 : To check what is status before Editing the address column',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));
    t.it('TC_112 : To check what is the status after Editing the address and clicking On submit button',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));
};

@Component({
    selector: 'test-cmp',
    template: '<visa></visa>'
})
class TestComponent { }
