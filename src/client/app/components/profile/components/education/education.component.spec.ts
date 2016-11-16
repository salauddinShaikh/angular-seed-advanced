import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { t } from '../../../../frameworks/test/index';

import { EducationComponent } from './education.component';

const testModuleConfig = () => {
    TestBed.configureTestingModule({
        declarations: [
            TestComponent, EducationComponent,
        ]
    });
};

export function main() {

    t.describe('Component: EducationComponent', () => {
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
        t.it('should display No Records with Add New Education button',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let educationDOMEl = fixture.debugElement.children[0].nativeElement;
                        t.e(educationDOMEl.querySelectorAll('h5')[0].textContent).toContain('No Records found!');
                        t.e(educationDOMEl.querySelectorAll('button')[0].textContent).toContain('Add New Education Record');
                    });
            }));
        t.it('should display editable Education section',
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
                        t.e(educationDOMEl.querySelectorAll('span')[0].textContent).toContain('Class');
                        t.e(educationDOMEl.querySelectorAll('span')[2].textContent).toContain('Degree');
                        t.e(educationDOMEl.querySelectorAll('button')[0].textContent).toContain('Submit');
                        t.e(educationDOMEl.querySelectorAll('button')[1].textContent).toContain('Cancel');
                    });
            }));
        t.it('should display Education table on Submit',
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
                        t.e(educationDOMEl.querySelectorAll('button')[0].textContent).toContain('Add New Education Record');
                    });
            }));
        t.it('should display No Records with Add New Education button on Cancel',
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
                        t.e(educationDOMEl.querySelectorAll('button')[0].textContent).toContain('Add New Education Record');
                    });
            }));
        t.it('TC_137 : To check what are the contents under Education',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_138 : To check whether link button is Clickable',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_139 : To check whether page is getting extended With the fields related to Education after Clicking on the link  button',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_140 : To check what are the contents displayed On the new page displayed',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_141 : To check what are the contents Displayed for Class Drop down',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_142 : To check whether it is mandatory or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_143 : To check whether if Select is selected From drop down and clicked on Submit button, will it display validation Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_144 :To check whether Degree field is Compulsory',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_145 : To check what are the contents in Grade drop down',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_146 : To check whether it is mandatory or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_147 : To check whether if Select is selected From drop down and clicked on Submit button, will it display validation Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_148 : To check whether Percentage Should be only whole number or Decimal number are allowed',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_149 : To check whether it allows number Greater than 100 and less than 0 or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_150 : To check whether it allows alphanumeric/Characters/special symbols are allowed Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_151 : To check whether if left blank, validation Is displayed or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_152 : To check whether whether it is mandatory To fill or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_153 : To check whether Year of Passing Should be only whole number or Decimal number are allowed',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_154 : To check whether it allows number Greater than 2016(current year) and less than 1950 or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_155 : To check whether it allows alphanumeric/Characters/special symbols are allowed Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_156 : To check whether if left blank, validation Is displayed or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_157 : To check whether whether it is mandatory To fill or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_158 : To check whether upload certification is Provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_159 : To check whether  it is mandatory or not  To fill',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_160 : To check whether if left blank, validation Is displayed or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_161 : To check whether Submit button Works or not when  clicked',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_162 : To check whether what happens when Clicked on Submit Button ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_163 : To check whether Cancel Button is Clickable or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_164 : To check what happens when clicked On Cancel button',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_165 : To check what is status before Editing the address column',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_166 : To check what is the status after Editing the address and clicking On submit button',
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
    template: '<education></education>'
})
class TestComponent { }
