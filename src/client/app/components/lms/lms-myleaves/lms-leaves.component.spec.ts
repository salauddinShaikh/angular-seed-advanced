// angular
import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../frameworks/test/index';
import { CoreModule } from '../../../frameworks/core/core.module';

// app
import { LmsLeavesComponent } from './lms-leaves.component';
import * as localForage from "localforage";

export function main() {

    t.describe('Component: SingleApproval', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule],
                declarations: [LmsLeavesComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA]
            });
        });

        t.it('should have defined leaves component',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.e(fixture.nativeElement).toBeTruthy();
                        t.e(TestComponent).toBeDefined();
                    });
            })
        );

        t.it('should have employee leave number details in tables', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        var table = fixture.nativeElement.querySelectorAll('table')[0];
                        var tHead = table.nativeElement.querySelectorAll('thead')[0];
                        var tr = tHead.nativeElement.querySelectorAll('tr')[0];

                        t.e(tHead.nativeElement.querySelectorAll('th')[0]).toBe('Leave Type');
                        t.e(tHead.nativeElement.querySelectorAll('th')[1]).toBe('Taken');
                        t.e(tHead.nativeElement.querySelectorAll('th')[2]).toBe('Balance');

                        t.e(fixture.nativeElement.querySelectorAll('.btn-outline')[0].innerHTML).toBe('Apply Leave');

                        var primeNgElemnt = fixture.nativeElement.getElementsByClassName('ui-datatable-tablewrapper');
                        t.e(primeNgElemnt[0]).not.toBe(null);
                    });
            });
        });

        t.it('should have employee leave records in datatable', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        var editBtnDataTable = fixture.nativeElement.getElementsByClassName('ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only');
                        t.e(editBtnDataTable).not.toBe(null);
                    });
            });
        });

        //REDIRECTION (BY EDIT BUTTON ON DATATABLE) TO 'APPLY LEAVE' TEST CASE TO BE ADDED

    })
}



@Component({
    selector: 'test-cmp',
    template: '<leaves></leaves>'
})
class TestComponent { }
