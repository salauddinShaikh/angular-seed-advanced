// angular
import { Component,DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// app
import { t } from '../../../frameworks/test/index';
import { LmsHolidaysComponent } from './lms-holidays.component';
 console.log('test check');
// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    declarations: [LmsHolidaysComponent, TestComponent]
  });
};

let componentInstance:    LmsHolidaysComponent;
let fixture: ComponentFixture<LmsHolidaysComponent>;
let de : DebugElement;
let el : HTMLElement;

 export function main(){
     console.log('test check');
    t.describe('@Component:LmsBulkApproveComponent',()=>{
        t.be(testModuleConfig);

        t.it('should work',t.async(()=>{
            TestBed.compileComponents().then(()=>{
                
                fixture = TestBed.createComponent(LmsHolidaysComponent);
                fixture.detectChanges();
                let compiled = fixture.debugElement.nativeElement;

                componentInstance = fixture.componentInstance;

                t.it('should find page content',()=>{
                    t.e(compiled).toBeDefined();
                });

                t.it('checks page-load component status',()=>{
                    de = fixture.debugElement.query(By.css('.fc-toolbar'));
                    el = de.nativeElement();
                    t.e(el).toBeDefined();

                    fixture.detectChanges();

                    de = fixture.debugElement.query(By.css('.ui-datatable-tablewrapper'));
                    el = de.nativeElement();
                    el.getElementsByTagName('THEAD');
                    t.e(el).not.toBeNull();
                });
            });
        }));
    });
 }

 @Component({
  selector: 'view-holidays',
  template: '<sd-viewholidays></sd-viewholidays>'
})
class TestComponent{}