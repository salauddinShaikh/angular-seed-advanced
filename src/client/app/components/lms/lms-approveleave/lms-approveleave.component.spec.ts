// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

// app
import { t } from '../../../frameworks/test/index';
import { LmsApproveLeavesComponent } from './lms-approveleave.component';
 console.log('test check');
// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    declarations: [LmsApproveLeavesComponent, TestComponent]
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

            });
        }));
    });
  }



@Component({
  selector: 'test-cmp',
  template: '<sd-applyleave></sd-applyleave>'
})
class TestComponent{}