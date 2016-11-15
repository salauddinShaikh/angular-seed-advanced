// angular
import { Component, DebugElement } from '@angular/core';
import { TestBed,ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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

let componentInstance:    LmsApproveLeavesComponent;
let fixture: ComponentFixture<LmsApproveLeavesComponent>;
let de : DebugElement;
let el : HTMLElement;


 export function main(){
     console.log('test check');
    t.describe('@Component:LmsBulkApproveComponent',()=>{
        t.be(testModuleConfig);

        t.it('should work',t.async(()=>{
            TestBed.compileComponents().then(()=>{
                
                fixture = TestBed.createComponent(LmsApproveLeavesComponent);
                fixture.detectChanges();
                let compiled = fixture.debugElement.nativeElement;

                componentInstance = fixture.componentInstance;

                t.it('should find page content',()=>{
                    t.e(compiled.querySelectorAll()[0]).toBeTruthy();
                });

            });
        }));
    });
  }



@Component({
  selector: 'approve-leave',
  template: '<sd-approveleave></sd-approveleave>'
})
class TestComponent{}