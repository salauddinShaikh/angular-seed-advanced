// angular
import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../frameworks/test/index';
import { CoreModule } from '../../../frameworks/core/core.module';

// app
import { LmsApproveLeavesComponent } from './lms-approveleave.component';
import * as localForage from "localforage";

export function main() {

    t.describe('Component: SingleApproval', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule],
                declarations: [LmsApproveLeavesComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA]
            });
        });
    });


    t.describe('should contain all tables', () => {
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    let fixture = TestBed.createComponent(TestComponent);
                    fixture.detectChanges();

                    
                });
        });
    });
}



@Component({
  selector: 'test-cmp',
  template: '<approve-leave></approve-leave>'
})
class TestComponent{}