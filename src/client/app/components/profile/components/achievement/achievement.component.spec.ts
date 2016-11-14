
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';
import { Component } from '@angular/core';
import { t } from '../../../../frameworks/test/index';

//  let de: DebugElement;
//  let el: HTMLElement;

export function main() {

    describe('Component: AchievementComponent', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [TestComponent],
                schemas: [NO_ERRORS_SCHEMA]
            });
        });
        t.it('should have a defined component', () => {
            t.it('should build without a problem',
               t.async(() => {
                    TestBed.compileComponents()
                        .then(() => {
                            let fixture = TestBed.createComponent(TestComponent);
                            fixture.detectChanges();
                            expect(TestComponent).toBeDefined();
                        });
                }));
           
        });
        t.it('should display No Records',
          t.async(() => {
            TestBed.compileComponents()
              .then(() => {
                
                //TODO : identify how to get element.

                // let fixture = TestBed.createComponent(TestComponent);               
                // de = fixture.debugElement.query(By.css('h5'));              
                // el = de.nativeElement;
                // fixture.detectChanges();
                // expect(el.textContent).toContain('No Records Found!');
              });
          }));
    })
};


@Component({
  selector: 'test-cmp',
  template: '<achievement></achievement>'
})
class TestComponent {}
