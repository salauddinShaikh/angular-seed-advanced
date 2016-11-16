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

        t.it('TC_167 : To check what are the contents Under Employment History',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_168 : To check whether link button is Clickable',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_169 : To check what happens after clicking On Add new employment link',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_170 : To check whether Employment details Are mandatory or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_171 : To check whether if Employment Details if left blank while submitting; it Will display validation or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_172 : To check whether Designation Are mandatory or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_173 : To check whether if Designation if left blank while submitting; it  Will display  Validation or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_174 : to check whether start date is mandatory To fill or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_175 : To check whether start date should Be selected from the calender provided',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_176 : To check whether start date is not future That end date',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_177 : To check if start date Is not filled but End date is entered; is there any Validation provided',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_178 : to check whether end date is mandatory To fill or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_179 : To check whether end date should Be selected from the calender provided',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_180 : To check whether end date is not past That start date',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_181 :To check if end date Is not filled but Start date is entered; is there any Validation provided',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_182 :To check whether Save button Works or not when  clicked',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_183 :To check whether what happens when Clicked on Save Button ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_184 :To check whether Cancel Button is Clickable or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_185 :To check what happens when clicked On Cancel button',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_186 :To check what is status before Editing the address column',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_187 :To check what is the status after Editing the address and clicking On Save button',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));

        t.it('TC_188 :To check whether Edit Option is Working or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));

        t.it('TC_189 :To check what Is displayed on the Screen after clicking edit icon',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_190 :To check whether file can be uploaded For each field or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_191 :To check whether Submit button Works or not when  clicked',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_192 :To check whether what happens when Clicked on Submit Button ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_193 :To check whether Close Button is Clickable or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_194 :To check what happens when clicked On Close button',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_195 :To check what is status before Editing the address column',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_196 :To check what is the status after Editing the address and clicking On submit button',
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
    template: '<employment-history></employment-history>'
})
class TestComponent { }
