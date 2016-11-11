// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

// app
import { t } from '../../../frameworks/test/index';
import { LmsApplyLeavesComponent } from './lms-applyleave.component';

// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    declarations: [LmsApplyLeavesComponent, TestComponent]
  });
};

 export function main(){
     console.log('test check');
    t.describe('@Component:LmsApplyLeavesComponent',()=>{
        t.be(testModuleConfig);

        t.it('should work',t.async(()=>{
            TestBed.compileComponents().then(()=>{
                
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                let compiled = fixture.debugElement.nativeElement;

                t.it('should find page content',()=>{
                    t.e(compiled.querySelectorAll()[0]).toBeTruthy();
                });

                //let instance = fixture.debugElement.children[0].componentInstance;
                t.it('should do math',()=>{
                    t.e(1+1).toBe(2);
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


//                 let compiled = fixture.debugElement.nativeElement;
//                 t.expect(compiled.querySelectorAll('h4')[0]).toHaveText('Requestor Details');
//                 t.expect(compiled.querySelectorAll('h4')[1]).toHaveText('Active on Projects');
//                 t.expect(compiled.querySelectorAll('h4')[2]).toHaveText('Apply Leave');

//                 compiled.querySelectorAll('button')[0].toHaveText('Add Leave').click();
//                 t.expect(compiled.querySelectorAll('h5')[0]).toBeTruthy();
//                 t.expect(compiled.querySelectorAll('h5')[0]).toHaveText('Reason cannot be left blank!');

//                 compiled.querySelectorAll('button')[0].toHaveText('Cancel').click();
//                 t.expect(compiled.querySelectorAll('h5')[0]).toBeFalsy();

//                 t.expect(compiled.querySelectorAll('input')[1]).toBeFalsy();

//                 t.expect(this.selectedLeave.label).toBe('Select');