import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { t } from '../../../../frameworks/test/index';

import { SkillSetComponent } from './skill-set.component';

const testModuleConfig = () => {
    TestBed.configureTestingModule({
        declarations: [
            TestComponent, SkillSetComponent,
        ]
    });
};

export function main() {

    t.describe('Component: SkillSetComponent', () => {
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
        t.it('should display No Records with Add New SkillSet button',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let skillSetDOMEl = fixture.debugElement.children[0].nativeElement;
                        t.e(skillSetDOMEl.querySelectorAll('h5')[0].textContent).toContain('No Records found!');
                        t.e(skillSetDOMEl.querySelectorAll('button')[0].textContent).toContain('Add New skillSet');
                    });
            }));
        t.it('should display editable skillSet section',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let skillSetInstance = fixture.debugElement.children[0].componentInstance;
                        let skillSetDOMEl = fixture.debugElement.children[0].nativeElement;

                        skillSetInstance.onAddClick();
                        fixture.detectChanges();

                        t.e(skillSetDOMEl.querySelectorAll('h5')[0]).toBeUndefined();
                        t.e(skillSetDOMEl.querySelectorAll('span')[0].textContent).toContain('Skill Type');
                        t.e(skillSetDOMEl.querySelectorAll('span')[2].textContent).toContain('Skills');
                        t.e(skillSetDOMEl.querySelectorAll('button')[0].textContent).toContain('Submit');
                        t.e(skillSetDOMEl.querySelectorAll('button')[1].textContent).toContain('Cancel');
                    });
            }));
        t.it('should display skillSet table on Submit',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let skillSetInstance = fixture.debugElement.children[0].componentInstance;
                        let skillSetDOMEl = fixture.debugElement.children[0].nativeElement;

                        skillSetInstance.onAddClick();
                        fixture.detectChanges();

                        skillSetInstance.submit();
                        fixture.detectChanges();

                        t.e(skillSetDOMEl.querySelectorAll('p-dataTable')[0]).toBeDefined();
                        t.e(skillSetDOMEl.querySelectorAll('button')[0].textContent).toContain('Add New SkillSet');
                    });
            }));
        t.it('should display No Records with Add New SkillSet button on Cancel',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let skillSetInstance = fixture.debugElement.children[0].componentInstance;
                        let skillSetDOMEl = fixture.debugElement.children[0].nativeElement;

                        skillSetInstance.onAddClick();
                        fixture.detectChanges();

                        skillSetInstance.cancel();
                        fixture.detectChanges();

                        t.e(skillSetDOMEl.querySelectorAll('h5')[0].textContent).toContain('No Records found!');
                        t.e(skillSetDOMEl.querySelectorAll('button')[0].textContent).toContain('Add New SkillSet');
                    });
            }));
        t.it('TC_237 :To check what are the contents Under Skill Set ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_238 :To check what are the contents underSkill type',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_239 :To check whether these values when Selected from drop down gets Selected for further use or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_240 :To check whether skill Type drop Down field is mandatory or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_241 :To check Skills field is provided or Not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_242 :To check Skills field is mandatory or Not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_243 :To check whether Save button Works or not when  clicked',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_244 :To check whether what happens when Clicked on Save Button ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_246 :To check what happens when clicked On Cancel button ',
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
    template: '<skillSet></skillSet>'
})
class TestComponent { }
