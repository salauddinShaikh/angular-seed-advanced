import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { t } from '../../../../frameworks/test/index';

import { CertificationComponent } from './certification.component';

const testModuleConfig = () => {
    TestBed.configureTestingModule({
        declarations: [
            TestComponent, CertificationComponent,
        ]
    });
};

export function main() {

    t.describe('Component: CertificationComponent', () => {
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
        t.it('should display No Records with Add New Certificate button',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let certificateDOMEl = fixture.debugElement.children[0].nativeElement;
                        t.e(certificateDOMEl.querySelectorAll('h5')[0].textContent).toContain('No Records found!');
                        t.e(certificateDOMEl.querySelectorAll('button')[0].textContent).toContain('Add New Certificate');
                    });
            }));
        t.it('should display editable Certification section',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let certificateInstance = fixture.debugElement.children[0].componentInstance;
                        let certificateDOMEl = fixture.debugElement.children[0].nativeElement;

                        certificateInstance.onAddClick();
                        fixture.detectChanges();

                        t.e(certificateDOMEl.querySelectorAll('h5')[0]).toBeUndefined();
                        t.e(certificateDOMEl.querySelectorAll('span')[0].textContent).toContain('Certificate');
                        t.e(certificateDOMEl.querySelectorAll('span')[2].textContent).toContain('Cerification Code');
                        t.e(certificateDOMEl.querySelectorAll('button')[0].textContent).toContain('Submit');
                        t.e(certificateDOMEl.querySelectorAll('button')[1].textContent).toContain('Cancel');
                    });
            }));
        t.it('should display Certification table on Submit',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let certificateInstance = fixture.debugElement.children[0].componentInstance;
                        let certificateDOMEl = fixture.debugElement.children[0].nativeElement;

                        certificateInstance.onAddClick();
                        fixture.detectChanges();

                        certificateInstance.submit();
                        fixture.detectChanges();

                        t.e(certificateDOMEl.querySelectorAll('p-dataTable')[0]).toBeDefined();
                        t.e(certificateDOMEl.querySelectorAll('button')[0].textContent).toContain('Add New Certificate');
                    });
            }));
        t.it('should display No Records with Add New Certificate button on Cancel',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let certificateInstance = fixture.debugElement.children[0].componentInstance;
                        let certificateDOMEl = fixture.debugElement.children[0].nativeElement;

                        certificateInstance.onAddClick();
                        fixture.detectChanges();

                        certificateInstance.cancel();
                        fixture.detectChanges();

                        t.e(certificateDOMEl.querySelectorAll('h5')[0].textContent).toContain('No Records found!');
                        t.e(certificateDOMEl.querySelectorAll('button')[0].textContent).toContain('Add New Certificate');
                    });
            }));
    });
};

@Component({
    selector: 'test-cmp',
    template: '<certification></certification>'
})
class TestComponent { }
