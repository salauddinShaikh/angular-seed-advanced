// angular
import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../frameworks/test/index';
import { CoreModule } from '../../../frameworks/core/core.module';

// app
import { LmsApplyLeavesComponent } from './lms-applyleave.component';
import * as localForage from "localforage";

export function main() {

    t.describe('Component: SingleApproval', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule],
                declarations: [LmsApplyLeavesComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA]
            });
        });
    });


    t.describe('on load status of component variables', () => {
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    let fixture = TestBed.createComponent(TestComponent);
                    fixture.detectChanges();

                    let homeInstance = fixture.debugElement.children[0].componentInstance;

                    t.e(homeInstance.leaves.length).toBe(5);
                    t.e(homeInstance.startDateDisabled).toBeTruthy();
                    t.e(homeInstance.endDateDisabled).toBeTruthy();
                    t.e(homeInstance.start).toBe(new Date());
                    t.e(homeInstance.end).toBe(new Date());
                    t.e(homeInstance.formIsClean).not.toBeTruthy();
                    t.e(homeInstance.isHalfDay).not.toBeTruthy();
                    t.e(homeInstance.showWarning).not.toBeTruthy();
                    t.e(homeInstance.warning).toBe('');

                });
        });
    });

    t.describe('changing "type of leave" to LEAVE call to "leaveTypeChanged()"', () => {
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    let fixture = TestBed.createComponent(TestComponent);
                    fixture.detectChanges();

                    let homeInstance = fixture.debugElement.children[0].componentInstance;

                    let event = { value: { id: 1 } };
                    homeInstance.leaveTypeChanged(event);
                    fixture.detectChanges();
                    t.e(homeInstance.showNumDays).toBe(1);
                    t.e(homeInstance.numberofdays).toBe(1);
                    t.e(homeInstance.startdateDisabled).not.toBeTruthy();
                    t.e(homeInstance.enddateDisabled).not.toBeTruthy();
                    t.e(homeInstance.isHalfDay).not.toBeTruthy();
                    t.e(homeInstance.start).toBe(new Date());
                    t.e(homeInstance.end).toBe(new Date());
                    t.e(homeInstance.warning).toBe('');

                });
        });
    });

    t.describe('changing "type of leave" to HALF DAY LEAVE call to "leaveTypeChanged()"', () => {
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    let fixture = TestBed.createComponent(TestComponent);
                    fixture.detectChanges();

                    let homeInstance = fixture.debugElement.children[0].componentInstance;

                    let event = { value: { id: 1 } };
                    homeInstance.leaveTypeChanged(event);
                    fixture.detectChanges();
                    t.e(homeInstance.showNumDays).toBe(0.5);
                    t.e(homeInstance.numberofdays).toBe(0.5);
                    t.e(homeInstance.startdateDisabled).not.toBeTruthy();
                    t.e(homeInstance.enddateDisabled).toBeTruthy();
                    t.e(homeInstance.isHalfDay).toBeTruthy();
                    t.e(homeInstance.start).toBe(new Date());
                    t.e(homeInstance.end).toBe(new Date());
                    t.e(homeInstance.warning).toBe('');

                });
        });
    });

    t.it('test the startSelected() method', () => {
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    let fixture = TestBed.createComponent(TestComponent);
                    fixture.detectChanges();

                    let homeInstance = fixture.debugElement.children[0].componentInstance;

                    homeInstance.start = new Date();
                    fixture.detectChanges();
                    homeInstance.startSelected();
                    fixture.detectChanges();
                    t.e(homeInstance.end).toBe(new Date());

                });
        });
    });

    t.it('test the dayDiffCalc() method by calling endSelected()', () => {
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    let fixture = TestBed.createComponent(TestComponent);
                    fixture.detectChanges();

                    let homeInstance = fixture.debugElement.children[0].componentInstance;

                    homeInstance.start = new Date();
                    homeInstance.end = new Date(homeInstance.start.getFullYear() + "-" + homeInstance.start.getMonth() + "-" + homeInstance.start.getDate() + 1);
                    fixture.detectChanges();

                    homeInstance.endSelected();
                    t.e(homeInstance.showNumDays).toBe(2);
                    t.e(homeInstance.numberofdays).toBe(2);
                });
        });
    });

    t.it('test the dayDiffCalc() method by calling endSelected()', () => {
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    let fixture = TestBed.createComponent(TestComponent);
                    fixture.detectChanges();

                    let homeInstance = fixture.debugElement.children[0].componentInstance;

                    homeInstance.cancelPressed();
                    t.e(homeInstance.finalLeaveData.length).toBe(0);
                    t.e(homeInstance.end).toBe(new Date());
                    t.e(homeInstance.start).toBe(new Date());
                    t.e(homeInstance.numberofdays).toBe(0);
                    t.e(homeInstance.showNumDays).toBe(0);
                    t.e(homeInstance.selectedLeave).toBe({ label: 'Select', value: { id: 0, name: 'Select' } });
                    t.e(homeInstance.reason).toBe('');
                    t.e(homeInstance.warning).toBe('');
                    t.e(homeInstance.formIsClean).toBe(false);
                    t.e(homeInstance.leaveVisible).toBe(true);
                });
        });
    });

    t.it('test the fillFinalLeaveData() method by calling addLeaves() for "Half-day Leave"', () => {
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    let fixture = TestBed.createComponent(TestComponent);
                    fixture.detectChanges();

                    let homeInstance = fixture.debugElement.children[0].componentInstance;

                    homeInstance.isHalfDay = true;
                    homeInstance.addLeaves();
                    t.e(homeInstance.warning).toBe('Reason cannot be left blank!');
                    t.e(homeInstance.formIsClean).toBe(false);
                    t.e(homeInstance.numberofdays).toBe(0.5);
                    t.e(homeInstance.showNumDays).toBe(0.5);
                    
                    fixture.detectChanges();
                    homeInstance = fixture.debugElement.children[0].componentInstance;

                    homeInstance.isHalfDay = true;
                    homeInstance.reason = 'Personal';
                    homeInstance.addLeaves();
                    t.e(homeInstance.warning).toBe('');
                    t.e(homeInstance.formIsClean).toBe(true);
                    t.e(homeInstance.numberofdays).toBe(0.5);
                    t.e(homeInstance.showNumDays).toBe(0.5);
                });
        });
    });

    t.it('test the fillFinalLeaveData() method by calling addLeaves() for "Leave"', () => {
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    let fixture = TestBed.createComponent(TestComponent);
                    fixture.detectChanges();

                    let homeInstance = fixture.debugElement.children[0].componentInstance;

                    homeInstance.isHalfDay = false;
                    homeInstance.start = new Date();
                    homeInstance.end = new Date(homeInstance.start.getFullYear() + "-" + homeInstance.start.getMonth() + "-" + homeInstance.start.getDate() + 1);
                    homeInstance.addLeaves();
                    t.e(homeInstance.warning).toBe('Reason cannot be left blank!');
                    t.e(homeInstance.formIsClean).toBe(false);
                    t.e(homeInstance.numberofdays).toBe(2);
                    t.e(homeInstance.showNumDays).toBe(2);
                    
                    fixture.detectChanges();
                    homeInstance = fixture.debugElement.children[0].componentInstance;

                    homeInstance.isHalfDay = true;
                    homeInstance.reason = 'Personal';
                    homeInstance.start = new Date();
                    homeInstance.end = new Date(homeInstance.start.getFullYear() + "-" + homeInstance.start.getMonth() + "-" + homeInstance.start.getDate() + 1);
                    homeInstance.addLeaves();
                    t.e(homeInstance.warning).toBe('');
                    t.e(homeInstance.formIsClean).toBe(true);
                    t.e(homeInstance.numberofdays).toBe(2);
                    t.e(homeInstance.showNumDays).toBe(2);
                });
        });
    });


}



@Component({
    selector: 'test-cmp',
    template: '<sd-applyleave></sd-applyleave>'
})
class TestComponent { }





// t.it('checks page-load component status',()=>{
//                     var date = new Date();
//                     t.e(compiled.querySelector('span')[1]).toBe('Apply Leave');
//                     t.e(compiled.querySelector('h5')).toBe('');
//                     t.e(componentInstance.warning).toBe('');
//                     t.e(componentInstance.finalLeaveData.length).toBe(0);
//                     t.e(compiled.querySelectorAll('input')[1].getAttribute('value')).toBe('');
//                     t.e(componentInstance.showNumDays).toBeFalsy();
//                     t.e(compiled.querySelectorAll('input')[2].getAttribute('value')).toBe(date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear());
//                     t.e(componentInstance.start).toBeFalsy(date);
//                     t.e(compiled.querySelectorAll('input')[3].getAttribute('value')).toBe(date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear());
//                     t.e(componentInstance.end).toBeFalsy(date);
//                     t.e(compiled.querySelector('textarea').getAttribute('value')).toBe('');
//                     t.e(componentInstance.reason).toBe('');
//                 });

//                 t.it('check blank values validation for Add Leave',()=>{
//                     fixture.detectChanges();
//                     t.e(compiled.querySelector('button')['Add Leave']).click();
//                     t.e(compiled.querySelector('h5')).toBeTruthy();

//                     t.e(compiled.querySelector('button')['Cancel']).click();
//                     fixture.detectChanges();

//                     t.e(compiled.querySelector('h5')).toBeFalsy();

//                 });

//                 t.it('check blank values validation for Cancel',()=>{
//                     fixture.detectChanges();
//                     t.e(compiled.querySelector('button')['Cancel']).click();
//                     t.e(compiled.querySelector('h5')).toBeFalsy();
//                 });


//                 t.it('test the startSelected() method',()=>{
//                     componentInstance.start = new Date();
//                     fixture.detectChanges();
//                     componentInstance.startSelected();
//                     fixture.detectChanges();
//                     t.e(componentInstance.end).toBe(new Date());
//                 });

//                 t.it('test the endSelected() method',()=>{
//                     var today = componentInstance.start = new Date();
//                     componentInstance.end = new Date(today.getFullYear()+"-"+today.getMonth()+"-"+today.getDate()+2);
//                     fixture.detectChanges();

//                     t.e(componentInstance.numberofdays).toBe(1);
//                     t.e(componentInstance.showNumDays).toBe(2);
//                 });

//                 t.it('test the addLeaves() method for adding half-day',()=>{
//                     componentInstance.isHalfDay = true;
//                     componentInstance.start = componentInstance.end = new Date();
//                     componentInstance.reason = 'get notes exchanged';
//                     componentInstance.formIsClean = true;
//                     componentInstance.addLeaves();
//                     fixture.detectChanges();

//                     t.e(componentInstance.finalLeaveData.length).toBe(1);
//                 });