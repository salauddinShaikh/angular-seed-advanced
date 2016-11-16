import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { t } from '../../../../frameworks/test/index';

import { ExperienceComponent } from './experience.component';

const testModuleConfig = () => {
    TestBed.configureTestingModule({
        declarations: [
            TestComponent, ExperienceComponent,
        ]
    });
};

export function main() {

    t.describe('Component: ExperienceComponent', () => {
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
        t.it('should display No Records with Add New Experience button',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let experienceDOMEl = fixture.debugElement.children[0].nativeElement;
                        t.e(experienceDOMEl.querySelectorAll('h5')[0].textContent).toContain('No Records found!');
                        t.e(experienceDOMEl.querySelectorAll('button')[0].textContent).toContain('Add New Experience');
                    });
            }));
        t.it('should display editable Experience section',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let experienceInstance = fixture.debugElement.children[0].componentInstance;
                        let experienceDOMEl = fixture.debugElement.children[0].nativeElement;

                        experienceInstance.onAddClick();
                        fixture.detectChanges();

                        t.e(experienceDOMEl.querySelectorAll('h5')[0]).toBeUndefined();
                        t.e(experienceDOMEl.querySelectorAll('span')[0].textContent).toContain('Project');
                        t.e(experienceDOMEl.querySelectorAll('span')[2].textContent).toContain('Client');
                        t.e(experienceDOMEl.querySelectorAll('button')[0].textContent).toContain('Submit');
                        t.e(experienceDOMEl.querySelectorAll('button')[1].textContent).toContain('Cancel');
                    });
            }));
        t.it('should display Experience table on Submit',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let experienceInstance = fixture.debugElement.children[0].componentInstance;
                        let experienceDOMEl = fixture.debugElement.children[0].nativeElement;

                        experienceInstance.onAddClick();
                        fixture.detectChanges();

                        experienceInstance.submit();
                        fixture.detectChanges();

                        t.e(experienceDOMEl.querySelectorAll('p-dataTable')[0]).toBeDefined();
                        t.e(experienceDOMEl.querySelectorAll('button')[0].textContent).toContain('Add New Experience');
                    });
            }));
        t.it('should display No Records with Add New Experience button on Cancel',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let experienceInstance = fixture.debugElement.children[0].componentInstance;
                        let experienceDOMEl = fixture.debugElement.children[0].nativeElement;

                        experienceInstance.onAddClick();
                        fixture.detectChanges();

                        experienceInstance.cancel();
                        fixture.detectChanges();

                        t.e(experienceDOMEl.querySelectorAll('h5')[0].textContent).toContain('No Records found!');
                        t.e(experienceDOMEl.querySelectorAll('button')[0].textContent).toContain('Add New Experience');
                    });
            }));

        t.it('TC_197 :To check what are the contents Under Experience',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_198 :To check whether link button is Clickable',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_199 :To check what happens after clicking On Add new employment link',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_200 :To check whether Project is mandatory Field or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_201 :To check whether if Project if left blank  while submitting; it Will display Validation or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_202 :To check whether Client is mandatory Field or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_203 :To check whether if Client if left blank while submitting; it Will display Validation or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_204 :to check whether start date is mandatory To fill or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_205 :To check whether start date should Be selected from the calender provided',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_206 :To check whether start date is not future That end date',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_207 :To check if start date Is not filled but End date is entered; is there any Validation provided',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_208 :to check whether end date is mandatory To fill or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_209 :To check whether end date should Be selected from the calender provided',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_210 :To check whether end date is not past That start date',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_211 :To check if end date Is not filled but Start date is entered; is there any Validation provided',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_212:To check whether role is mandatory Field or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_213 :To check whether if role if left blank while submitting; it Will display Validation or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_214 :To check whether Environment is mandatory Field or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_215 :To check whether if Environment if left blank while submitting; it Will display Validation or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_216 :To check whether Responsibilities is Mandatory Field or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_217 :To check whether if Responsibilities if left blank while submitting; it Will display Validation or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_218 :To check whether Description is mandatory Field or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_219 :To check whether if Description if left blank  while submitting; it Will display Validation or not  ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_220 :To check whether Save button Works or not when  clicked ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_221 :To check whether what happens when Clicked on Save Button ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_222 :To check whether Cancel Button is Clickable or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_223 :To check what happens when clicked On Cancel button ',
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
    template: '<experience></experience>'
})
class TestComponent { }
