import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { t } from '../../../../frameworks/test/index';

import { AchievementComponent } from './achievement.component';

const testModuleConfig = () => {
    TestBed.configureTestingModule({
        declarations: [
            TestComponent, AchievementComponent,
        ]
    });
};

export function main() {

    t.describe('Component: AchievementComponent', () => {
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
        t.it('should display No Records with Add New Achievement button',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let achievementDOMEl = fixture.debugElement.children[0].nativeElement;
                        t.e(achievementDOMEl.querySelectorAll('h5')[0].textContent).toContain('No Records found!');
                        t.e(achievementDOMEl.querySelectorAll('button')[0].textContent).toContain('Add New Achievement');
                    });
            }));
        t.it('should display editable Achievement section',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let achievementInstance = fixture.debugElement.children[0].componentInstance;
                        let achievementDOMEl = fixture.debugElement.children[0].nativeElement;

                        achievementInstance.onAddClick();
                        fixture.detectChanges();

                        t.e(achievementDOMEl.querySelectorAll('h5')[0]).toBeUndefined();
                        t.e(achievementDOMEl.querySelectorAll('span')[0].textContent).toContain('Achievement');
                        t.e(achievementDOMEl.querySelectorAll('button')[0].textContent).toContain('Submit');
                        t.e(achievementDOMEl.querySelectorAll('button')[1].textContent).toContain('Cancel');
                    });
            }));
        t.it('should display achievement table on Submit',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let achievementInstance = fixture.debugElement.children[0].componentInstance;
                        let achievementDOMEl = fixture.debugElement.children[0].nativeElement;

                        achievementInstance.onAddClick();
                        fixture.detectChanges();

                        achievementInstance.submit();
                        fixture.detectChanges();

                        t.e(achievementDOMEl.querySelectorAll('p-dataTable')[0]).toBeDefined();
                        t.e(achievementDOMEl.querySelectorAll('button')[0].textContent).toContain('Add New Achievement');
                    });
            }));
        t.it('should display No Records with Add New Achievement button on Cancel',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let achievementInstance = fixture.debugElement.children[0].componentInstance;
                        let achievementDOMEl = fixture.debugElement.children[0].nativeElement;

                        achievementInstance.onAddClick();
                        fixture.detectChanges();

                        achievementInstance.cancel();
                        fixture.detectChanges();

                        t.e(achievementDOMEl.querySelectorAll('h5')[0].textContent).toContain('No Records found!');
                        t.e(achievementDOMEl.querySelectorAll('button')[0].textContent).toContain('Add New Achievement');
                    });
            }));

        t.it('TC_271 :To check what are the contents under Achievements',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_272 :To check whether edit icon is clickable Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_273 :To check what is displayed on the Screen after clicking edit icon',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_274 :To check whether update link button  Is Clickable or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));

        t.it('TC_275 :To check whether Updated Achievements Is displayed on the text box or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_276 :To check whether cancel link Button is  Clickable or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_277 :To check what happens when clicked On the cancel link button',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_278 :To check whether delete button is Clickable or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_279 :To check whether data gets vanished Or not after deleting it',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));

        t.it('TC_280 :To check whether save button  Works Or not when  clicked',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));

        t.it('TC_281 :To check whether data written on the Text box is getting saved',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_282 :To check whether Cancel Button is Clickable or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_283 :To check what happens when clicked On Cancel button',
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
    template: '<achievement></achievement>'
})
class TestComponent { }
