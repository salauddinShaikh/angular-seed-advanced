// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

// app
import { t } from '../../../frameworks/test/index';
import { LmsApplyLeavesComponent } from './lms-applyleave.component';
console.log('test check');
// test module configuration for each test
const testModuleConfig = () => {
    TestBed.configureTestingModule({
        declarations: [LmsApplyLeavesComponent, TestComponent]
    });
};

export function main() {
    console.log('test check');
    t.describe('@Component:LmsApplyLeavesComponent', () => {
        t.be(testModuleConfig);

        t.it('should work', t.async(() => {
            TestBed.compileComponents().then(() => {

                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                let compiled = fixture.debugElement.nativeElement;

                let componentInstance = fixture.debugElement.children[0].componentInstance;

                t.it('should find page content', () => {
                    t.e(compiled.querySelectorAll()[0]).toBeTruthy();
                });

                t.it('checks page-load component status',()=>{
                    var date = new Date();
                    t.e(compiled.querySelector('span')[1]).toBe('Apply Leave');
                    t.e(compiled.querySelector('h5')).toBe('');
                    t.e(componentInstance.warning).toBe('');
                    t.e(componentInstance.finalLeaveData.length).toBe(0);
                    t.e(compiled.querySelectorAll('input')[1].getAttribute('value')).toBe('');
                    t.e(componentInstance.showNumDays).toBeFalsy();
                    t.e(compiled.querySelectorAll('input')[2].getAttribute('value')).toBe(date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear());
                    t.e(componentInstance.start).toBeFalsy(date);
                    t.e(compiled.querySelectorAll('input')[3].getAttribute('value')).toBe(date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear());
                    t.e(componentInstance.end).toBeFalsy(date);
                    t.e(compiled.querySelector('textarea').getAttribute('value')).toBe('');
                    t.e(componentInstance.comments).toBe('');
                });

                t.it('check blank values validation for Add Leave',()=>{
                    t.e(compiled.querySelector('button')['Add Leave']).click();
                    t.e(compiled.querySelector('h5')).toBeTruthy();

                    componentInstance.cancelPressed();

                    t.e(compiled.querySelector('h5')).toBeFalsy();

                });

                t.it('check blank values validation for Cancel',()=>{
                    t.e(compiled.querySelector('button')['Cancel']).click();
                    t.e(compiled.querySelector('h5')).toBeFalsy();
                });

            });
        }));
    });
}



@Component({
    selector: 'test-cmp',
    template: '<sd-applyleave></sd-applyleave>'
})
class TestComponent { }


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