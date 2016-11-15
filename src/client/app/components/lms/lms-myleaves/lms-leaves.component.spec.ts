import { Component, DebugElement } from '@angular/core';
import { TestBed,ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// app
import { t } from '../../../frameworks/test/index';
import { LmsLeavesComponent } from './lms-leaves.component';
 console.log('test check');
// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    declarations: [LmsLeavesComponent, TestComponent]
  });
};

let componentInstance:    LmsLeavesComponent;
let fixture: ComponentFixture<LmsLeavesComponent>;
let de : DebugElement;
let el : HTMLElement;


 export function main(){
     console.log('test check');
    t.describe('@Component:LmsBulkApproveComponent',()=>{
        t.be(testModuleConfig);

        t.it('should work',t.async(()=>{
            TestBed.compileComponents().then(()=>{
                
                fixture = TestBed.createComponent(LmsLeavesComponent);
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
  selector: 'leaves',
  template: '<sd-leaves></sd-leaves>'
})
class TestComponent{}