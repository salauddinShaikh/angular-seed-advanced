// angular
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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

let componentInstance:    LmsApplyLeavesComponent;
let fixture: ComponentFixture<LmsApplyLeavesComponent>;
let de : DebugElement;
let el : HTMLElement;

export function main() {
    console.log('test check');
    t.describe('@Component:LmsApplyLeavesComponent', () => {
        t.be(testModuleConfig);

        t.it('should work', t.async(() => {
            TestBed.compileComponents().then(() => {

                fixture = TestBed.createComponent(LmsApplyLeavesComponent);
                fixture.detectChanges();
                let compiled = fixture.debugElement.nativeElement;

                componentInstance = fixture.componentInstance;

                t.it('should find page content', () => {
                    t.e(compiled).toBeDefined();
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
                    //t.e(componentInstance.comments).toBe('');
                });

                t.it('check blank values validation for Add Leave',()=>{
                    fixture.detectChanges();
                    t.e(compiled.querySelector('button')['Add Leave']).click();
                    t.e(compiled.querySelector('h5')).toBeTruthy();

                    componentInstance.cancelPressed();
                    fixture.detectChanges();

                    t.e(compiled.querySelector('h5')).toBeFalsy();

                });

                t.it('check blank values validation for Cancel',()=>{
                    fixture.detectChanges();
                    t.e(compiled.querySelector('button')['Cancel']).click();
                    t.e(compiled.querySelector('h5')).toBeFalsy();
                });

                t.it('test the dayDiffCalc() method',()=>{
                    var today = new Date();
                    var tomorrow = new Date(today.getFullYear()+"-"+today.getMonth()+"-"+today.getDate()+1);
                    fixture.detectChanges();
                    t.e(componentInstance.dayDiffCalc(today, tomorrow)).toBe(1);
                });

                t.it('test the startSelected() method',()=>{
                    componentInstance.start = new Date();
                    fixture.detectChanges();
                    componentInstance.startSelected();
                    fixture.detectChanges();
                    t.e(componentInstance.end).toBe(new Date());
                });

                t.it('test the endSelected() method',()=>{
                    var today = componentInstance.start = new Date();
                    componentInstance.end = new Date(today.getFullYear()+"-"+today.getMonth()+"-"+today.getDate()+2);
                    fixture.detectChanges();

                    t.e(componentInstance.numberofdays).toBe(1);
                    t.e(componentInstance.showNumDays).toBe(2);
                });

                t.it('test the addLeaves() method for adding half-day',()=>{
                    componentInstance.isHalfDay = true;
                    componentInstance.start = componentInstance.end = new Date();
                    componentInstance.reason = 'get notes exchanged';
                    componentInstance.formIsClean = true;
                    componentInstance.addLeaves();
                    fixture.detectChanges();

                    t.e(componentInstance.finalLeaveData.length).toBe(1);
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

