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
    });
};

@Component({
    selector: 'test-cmp',
    template: '<experience></experience>'
})
class TestComponent { }
