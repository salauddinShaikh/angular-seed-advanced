import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { t } from '../../../../../frameworks/test/index';

import { ProfileAddressComponent } from './profile-address.component';

const testModuleConfig = () => {
    TestBed.configureTestingModule({
        declarations: [
            TestComponent, ProfileAddressComponent,
        ]
    });
};

export function main() {

    t.describe('Component: ProfileAddressComponent', () => {
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
        t.it('should display No Records',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let addressDOMEl = fixture.debugElement.children[0].nativeElement;
                        t.e(addressDOMEl.querySelectorAll('td')[0].textContent).toContain('No Records found!');
                    });
            }));
        t.it('should display editable Profile Address section on Add',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let addressInstance = fixture.debugElement.children[0].componentInstance;
                        let addressDOMEl = fixture.debugElement.children[0].nativeElement;

                        addressInstance.onAddClick();
                        fixture.detectChanges();

                        t.e(addressDOMEl.querySelectorAll('td')[0]).toBeUndefined();
                        t.e(addressDOMEl.querySelectorAll('label')[0].textContent).toContain('Current Address');
                        t.e(addressDOMEl.querySelectorAll('label')[1].textContent).toContain('Current Address Proof');
                        t.e(addressDOMEl.querySelectorAll('label')[2].textContent).toContain('Permanent Address');
                        t.e(addressDOMEl.querySelectorAll('label')[3].textContent).toContain('Permanent Address');
                        t.e(addressDOMEl.querySelectorAll('button')[0].textContent).toContain('Submit');
                        t.e(addressDOMEl.querySelectorAll('button')[1].textContent).toContain('Cancel');
                    });
            }));
        t.it('should display  Profile Address table on Submit',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let addressInstance = fixture.debugElement.children[0].componentInstance;
                        let addressDOMEl = fixture.debugElement.children[0].nativeElement;

                        addressInstance.onAddClick();
                        fixture.detectChanges();

                        addressInstance.submit();
                        fixture.detectChanges();

                        t.e(addressDOMEl.querySelectorAll('p-dataTable')[0]).toBeDefined();
                    });
            }));
        t.it('should display No Records on Cancel',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let addressInstance = fixture.debugElement.children[0].componentInstance;
                        let addressDOMEl = fixture.debugElement.children[0].nativeElement;

                        addressInstance.onAddClick();
                        fixture.detectChanges();

                        addressInstance.cancel();
                        fixture.detectChanges();

                        t.e(addressDOMEl.querySelectorAll('td')[0].textContent).toContain('No Records found!');
                        t.e(addressDOMEl.querySelectorAll('label')[0]).toBeUndefined();
                        t.e(addressDOMEl.querySelectorAll('label')[1]).toBeUndefined();
                        t.e(addressDOMEl.querySelectorAll('label')[2]).toBeUndefined();
                        t.e(addressDOMEl.querySelectorAll('label')[3]).toBeUndefined();
                        t.e(addressDOMEl.querySelectorAll('button')[0]).toBeUndefined();
                        t.e(addressDOMEl.querySelectorAll('button')[1]).toBeUndefined();
                    });
            }));
        t.it('TC_81 : To check what are the contents under Address details',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_82 : To check whether edit icon is clickable Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_83 : To check what is displayed on the Screen after clicking edit icon',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_84 : To check whether Submit button Works or not when  clicked',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_85 : To check whether what happens when Clicked on Submit Button ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_86 : To check whether Cancel Button is Clickable or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_86 : To check whether Cancel Button is Clickable or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_87 : To check what happens when clicked On Cancel button',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_88 : To check what is status before Editing the address column',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_89 : To check what is the status after Editing the address and clicking On submit button',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_90 : To check whether HR comments field Is mandatory to be filled or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));

        t.it('TC_91 : To check whether the changed address Reflects on Personal Info Page or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));

    });
};

@Component({
    selector: 'test-cmp',
    template: '<profile-address></profile-address>'
})
class TestComponent { }
