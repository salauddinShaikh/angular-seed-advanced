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

        t.it('TC_247 :To check what are the contents Under Certification ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_248 :To check what are the contents Under Certification drop down ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_249 :To check whether  it is mandatory or Not to fill ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_250 :To check whether a particular  value is Getting selected or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_251 :To check whether the selected value can Be deselected or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_252 :To check whether selected value is Getting saved or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_253 :To check whether if Select value is Selected , then validation is displayed Or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_254 :To check what are the contents Under Code drop down',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_255 :To check whether  it is mandatory or Not to fill ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_256 :To check whether a particular  value is Getting selected or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_257 :To check whether the selected value can Be deselected or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_258 :To check whether selected value is Getting saved or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_259 :To check whether if Select value is Selected , then validation is displayed Or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_260 :To check whether it is mandatory to Select the check box provided in front of From ESPL',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_261 :To check certification date is mandatory To fill or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_262 :To check whether the date selected Should not be from future ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));

        t.it('TC_263 :To check whether calender option is Provided or not in front of certification Date or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_264 :To check whether date is getting selected Only through calender ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_265 :To check whether upload certification  Is Provided or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_266 :To check whether  it is mandatory Or not to fill ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));

        t.it('TC_267 :To check whether Submit button Works or not when  clicked',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_268 :To check whether what happens when Clicked on Submit Button ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_269 :To check whether Cancel Button is Clickable or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_270 :To check what happens when clicked On Cancel button',
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
    template: '<certification></certification>'
})
class TestComponent { }
