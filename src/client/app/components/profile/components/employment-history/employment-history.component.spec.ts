import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { t } from '../../../../frameworks/test/index';

import { EmploymentHistoryComponent } from './employment-history.component';

const testModuleConfig = () => {
    TestBed.configureTestingModule({
        declarations: [
            TestComponent, EmploymentHistoryComponent,
        ]
    });
};

export function main() {

    t.describe('Component: EmploymentHistoryComponent', () => {
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
        t.it('should display No Records with Add New Employment button and  Last Employer Details',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let educationDOMEl = fixture.debugElement.children[0].nativeElement;
                        t.e(educationDOMEl.querySelectorAll('h5')[0].textContent).toContain('No Records found!');
                        t.e(educationDOMEl.getElementsByClassName('caption title')[0].textContent).toContain('Employment History Details');
                        t.e(educationDOMEl.querySelectorAll('button')[0].textContent).toContain('Add New Employment');

                        t.e(educationDOMEl.getElementsByClassName('caption title')[1].textContent).toContain('Last Employer Details');
                        t.e(educationDOMEl.querySelectorAll('td')[0].textContent).toContain('1st Month Salary Slip');
                        t.e(educationDOMEl.querySelectorAll('td')[2].textContent).toContain('2nd Month Salary Slip');
                    });
            }));
        t.it('should display editable Employment section',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let educationInstance = fixture.debugElement.children[0].componentInstance;
                        let educationDOMEl = fixture.debugElement.children[0].nativeElement;

                        educationInstance.onAddClick();
                        fixture.detectChanges();

                        t.e(educationDOMEl.querySelectorAll('h5')[0]).toBeUndefined();
                        t.e(educationDOMEl.querySelectorAll('span')[1].textContent).toContain('Employment Detail');
                        t.e(educationDOMEl.querySelectorAll('span')[3].textContent).toContain('Designation');
                        t.e(educationDOMEl.querySelectorAll('button')[0].textContent).toContain('Submit');
                        t.e(educationDOMEl.querySelectorAll('button')[1].textContent).toContain('Cancel');
                    });
            }));
        t.it('should display Employment Detail table on Submit',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let educationInstance = fixture.debugElement.children[0].componentInstance;
                        let educationDOMEl = fixture.debugElement.children[0].nativeElement;

                        educationInstance.onAddClick();
                        fixture.detectChanges();

                        educationInstance.submit();
                        fixture.detectChanges();

                        t.e(educationDOMEl.querySelectorAll('p-dataTable')[0]).toBeDefined();
                        t.e(educationDOMEl.querySelectorAll('button')[0].textContent).toContain('Add New Employment Detail');
                    });
            }));
        t.it('should display No Records with Add New Employment button on Cancel',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let educationInstance = fixture.debugElement.children[0].componentInstance;
                        let educationDOMEl = fixture.debugElement.children[0].nativeElement;

                        educationInstance.onAddClick();
                        fixture.detectChanges();

                        educationInstance.cancel();
                        fixture.detectChanges();

                        t.e(educationDOMEl.querySelectorAll('h5')[0].textContent).toContain('No Records found!');
                        t.e(educationDOMEl.querySelectorAll('button')[0].textContent).toContain('Add New Employment Detail');
                    });
            }));

        t.it('should display Editable Last Employer Details section',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let educationInstance = fixture.debugElement.children[0].componentInstance;
                        let educationDOMEl = fixture.debugElement.children[0].nativeElement;

                        educationInstance.addLastEmployer();
                        fixture.detectChanges();

                        t.e(educationDOMEl.getElementsByTagName('label')[0].textContent).toContain('1st Month Salary Slip');
                        t.e(educationDOMEl.getElementsByTagName('label')[1].textContent).toContain('2nd Month Salary Slip');
                        t.e(educationDOMEl.getElementsByTagName('label')[2].textContent).toContain('3nd Month Salary Slip');
                        t.e(educationDOMEl.getElementsByTagName('label')[3].textContent).toContain('Employer Relieving/Exp Letter One');
                        t.e(educationDOMEl.getElementsByTagName('label')[4].textContent).toContain('Employer Relieving/Exp Letter Two:');
                        t.e(educationDOMEl.querySelectorAll('button')[1].textContent).toContain('Submit');
                        t.e(educationDOMEl.querySelectorAll('button')[2].textContent).toContain('Cancel');
                    });
            }));

        t.it('should display Last Employer Details table with record on Submit',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let educationInstance = fixture.debugElement.children[0].componentInstance;
                        let educationDOMEl = fixture.debugElement.children[0].nativeElement;

                        educationInstance.addLastEmployer();
                        fixture.detectChanges();

                        educationInstance.submitLastEmployer();
                        fixture.detectChanges();

                        t.e(educationInstance.lastEmployerDetails.length).toEqual(1);
                        t.e(educationDOMEl.getElementsByTagName('label')[0]).toBeUndefined();
                    });
            }));
        t.it('should display Last Employer Details table without record on Cancel',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let educationInstance = fixture.debugElement.children[0].componentInstance;
                        let educationDOMEl = fixture.debugElement.children[0].nativeElement;

                        educationInstance.onAddClick();
                        fixture.detectChanges();

                        educationInstance.cancel();
                        fixture.detectChanges();

                        t.e(educationInstance.lastEmployerDetails.length).toEqual(0);
                        t.e(educationDOMEl.getElementsByTagName('label')[0]).toBeUndefined();
                    });
            }));
    });
};


@Component({
    selector: 'test-cmp',
    template: '<employment-history></employment-history>'
})
class TestComponent { }
