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
    });
};

@Component({
    selector: 'test-cmp',
    template: '<education></education>'
})
class TestComponent { }
