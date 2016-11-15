import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { Router} from '@angular/router';

import { BookComponent } from './book-conference.component';
import { t } from '../../../../../frameworks/test/index';
import { CoreModule } from '../../../../../frameworks/core/core.module';
import {DropdownModule, SharedModule} from 'primeng/primeng';

export function main() {

    t.describe('Component: BookComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule, RouterTestingModule, DropdownModule, SharedModule],
                declarations: [BookComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [{ provide: Router, useClass: RouterStub }]
            });
        });
        t.it('should have a defined component',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.e(fixture.nativeElement).toBeTruthy();
                        t.e(TestComponent).toBeDefined();
                    });
            }))
        t.it('should have a conferenceRooms property initialize',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        t.expect(componentInstance.conferenceRooms.length).toBe(9);
                    });
            }))
        t.it('should save a record',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        componentInstance.conferenceModel.title = 'Meeting';
                        componentInstance.conferenceModel.start = new Date();
                        componentInstance.conferenceModel.end = new Date();
                        componentInstance.selectedRoom = { name: 'Bahamas', color: 'red' };
                        componentInstance.save();
                        t.expect(componentInstance.conferenceModel.conference).toBe('Bahamas');
                        t.expect(componentInstance.conferenceModel.color).toBe('red');
                    });
            }))
    })
};


@Component({
    selector: 'test-cmp',
    template: '<book-conference></book-conference>'
})
class TestComponent { }

class RouterStub {
    navigate(url: any) { return url; }
}