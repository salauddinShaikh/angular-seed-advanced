// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

// app
import { t } from '../../../frameworks/test/index';
import { LmsSingleApprovalComponent } from './lms-singleapproval.component';
 console.log('test check');
// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    declarations: [LmsSingleApprovalComponent, TestComponent]
  });
};

 export function main(){
     console.log('test check');
    t.describe('@Component:LmsBulkApproveComponent',()=>{
        t.be(testModuleConfig);

        t.it('should work',t.async(()=>{
            TestBed.compileComponents().then(()=>{
                
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                let compiled = fixture.debugElement.nativeElement;

                let componentInstance = fixture.debugElement.children[0].componentInstance;

                t.it('should find page content',()=>{
                    t.e(compiled.querySelectorAll()[0]).toBeTruthy();
                });

                t.it('checks page-load component status',()=>{
                    t.e(compiled.querySelector('span')[1]).toBe('Approve Leaves');
                    t.e(compiled.querySelector('h5')).toBe('');
                    t.e(componentInstance.validationMessage).toBe('');
                    t.e(compiled.querySelector('textarea').getAttribute('value')).toBe('');
                    t.e(componentInstance.comments).toBe('');
                });

                t.it('checks validation after loading',()=>{
                    t.e(compiled.querySelector('button')['Approve']).click();
                    t.e(compiled.querySelector('h5')).toBeTruthy();

                    componentInstance.validationMessage = '';

                    t.e(compiled.querySelector('button')['Reject']).click();
                    t.e(compiled.querySelector('h5')).toBeTruthy();
                });

                t.it('should clear the form validation variables ',()=>{
                    componentInstance.clearForm();
                    t.e(componentInstance.comments).toBeFalsy();
                    t.e(componentInstance.formIsClean).toBeTruthy()
                });

                t.it('checks if approvePressed() works',()=>{
                    componentInstance.approvePressed();
                    t.e(componentInstance.this.formIsClean).toBeTrthy();
                    t.e(componentInstance.validationMessage).toBe('Approved');
                    t.e(componentInstance.formIsClean).toBeTruthy();
                });

                t.it('checks if rejectPressed() works',()=>{
                    componentInstance.approvePressed();
                    t.e(componentInstance.this.formIsClean).toBeTrthy();
                    t.e(componentInstance.validationMessage).toBe('Rejected');
                    t.e(componentInstance.formIsClean).toBeTruthy();
                });
            });
        }));
    });
  }



@Component({
  selector: 'test-cmp',
  template: '<sd-applyleave></sd-applyleave>'
})
class TestComponent{}