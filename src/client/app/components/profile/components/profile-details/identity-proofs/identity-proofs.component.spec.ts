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
    t.it('TC_113 : To check what are the contents under Identity Proofs',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_114 : To check whether edit icon is clickable Or not',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_115 : To check what is displayed on the Screen after clicking edit icon',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('To check whether while add link button Provided or not for adding new Identity proofs',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('To check what is displayed on the page When clicked on the add link button ',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('To check what happens when a value From drop down is selected',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('to check whether drop down contains The identity proof type  which are Already used or not',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));

    t.it('TC_116 : To check whether it is mandatory or not',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));
    t.it('TC_117 :To check whether Submit button Works or not when  clicked',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));
    t.it('TC_118 : To check whether what happens when Clicked on Submit Button ',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));
    t.it('TC_119 : To check whether Cancel Button is Clickable or not',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));
    t.it('TC_120 : To check what happens when clicked On Cancel button',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));
    t.it('TC_121 : To check what is status before Editing the address column',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));
    t.it('TC_122 : To check what is the status after Editing the address and clicking On submit button',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));
    t.it('TC_123 : To check whether HR comments field Is mandatory to be filled or not',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    t.e(true).toBe(false);
                });
        }));
};

@Component({
    selector: 'test-cmp',
    template: '<identity-proofs></identity-proofs>'
})
class TestComponent { }
