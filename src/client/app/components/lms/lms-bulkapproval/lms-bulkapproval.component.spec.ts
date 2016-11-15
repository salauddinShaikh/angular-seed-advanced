// angular
import { Component, DebugElement } from '@angular/core';
import { TestBed,ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// app
import { t } from '../../../frameworks/test/index';
import { LmsBulkApproveComponent } from './lms-bulkapproval.component';
 console.log('test check');
// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    declarations: [LmsBulkApproveComponent, TestComponent]
  });
};

let componentInstance:    LmsBulkApproveComponent;
let fixture: ComponentFixture<LmsBulkApproveComponent>;
let de : DebugElement;
let el : HTMLElement;

 export function main(){
     console.log('test check');
    t.describe('@Component:LmsBulkApproveComponent',()=>{
        t.be(testModuleConfig);

        t.it('should work',t.async(()=>{
            TestBed.compileComponents().then(()=>{

                fixture = TestBed.createComponent(LmsBulkApproveComponent);
                fixture.detectChanges();
                let compiled = fixture.debugElement.nativeElement;

                componentInstance = fixture.componentInstance;

                t.it('should find page content',()=>{
                    t.e(compiled).toBeDefined();
                });

                t.it('checks page-load component status',()=>{
                    fixture.detectChanges();
                    t.e(compiled.querySelector('span')[1]).toBe('Bulk Approval');
                    t.e(compiled.querySelector('h5')).toBe('');
                    t.e(componentInstance.validationMessage).toBe('');
                    t.e(compiled.querySelector('textarea').getAttribute('value')).toBe('');
                    t.e(componentInstance.comments).toBe('');
                });

                t.it('checks validation after loading',()=>{
                    fixture.detectChanges();
                    t.e(compiled.querySelector('button')['Approve']).click();
                    t.e(compiled.querySelector('h5')).toBeTruthy();

                    componentInstance.validationMessage = '';
                    fixture.detectChanges();

                    t.e(compiled.querySelector('button')['Reject']).click();
                    t.e(compiled.querySelector('h5')).toBeTruthy();
                });

                t.it('should clear the form validation variables ',()=>{
                    componentInstance.clearForm();
                    fixture.detectChanges();
                    t.e(componentInstance.selectedEmployees.length).toBe(0);
                    t.e(componentInstance.comments).toBeFalsy();
                    t.e(componentInstance.formIsClean).toBeTruthy()
                });

                t.it('checks if approvePressed() works',()=>{
                    componentInstance.approvePressed();
                    fixture.detectChanges();
                    t.e(componentInstance.formIsClean).toBeTruthy();
                    t.e(componentInstance.validationMessage).toBe('Approved');
                    t.e(componentInstance.formIsClean).toBeTruthy();
                    t.e(componentInstance.selectedEmployees.length).toBe(0);
                });

                t.it('checks if rejectPressed() works',()=>{
                    componentInstance.rejectPressed();
                    fixture.detectChanges();
                    t.e(componentInstance.formIsClean).toBeTruthy();
                    t.e(componentInstance.validationMessage).toBe('Rejected');
                    t.e(componentInstance.formIsClean).toBeTruthy();
                    t.e(componentInstance.selectedEmployees.length).toBe(0);
                });

                t.it('check the checkbox',()=>{
                    de = fixture.debugElement.query(By.css('.ui-chkbox-icon'));
                    el = de.nativeElement();
                });

            });
        }));
    });
  }



@Component({
  selector: 'bulkapproval',
  template: '<sd-bulkapproval></sd-bulkapproval>'
})
class TestComponent{}
