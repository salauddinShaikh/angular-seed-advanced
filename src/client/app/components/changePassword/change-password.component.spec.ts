// angular
import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../frameworks/test/index';
import { CoreModule } from '../../frameworks/core/core.module';

// app
import { ChangePasswordComponent } from './change-password.component';
import * as localForage from "localforage";

export function main() {

    t.describe('Component: SingleApproval', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule],
                declarations: [ChangePasswordComponent, TestComponent],
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
                });
        });
    });
}


@Component({
    selector: 'test-cmp',
    template: '<change-password-component></change-password-component>'
})
class TestComponent { }