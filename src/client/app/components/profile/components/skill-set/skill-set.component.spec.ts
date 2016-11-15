import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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
    });
};

@Component({
    selector: 'test-cmp',
    template: '<skillSet></skillSet>'
})
class TestComponent { }
