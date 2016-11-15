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
    });
};

@Component({
    selector: 'test-cmp',
    template: '<achievement></achievement>'
})
class TestComponent { }
