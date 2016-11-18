import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { Router} from '@angular/router';

import { MyBookingComponent } from './my-booking.component';
import { t } from '../../../../../frameworks/test/index';
import { CoreModule } from '../../../../../frameworks/core/core.module';
import { SharedModule, ConfirmDialogModule, ConfirmationService} from 'primeng/primeng';
export function main() {

    t.describe('Component: MyBookingComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule, RouterTestingModule, SharedModule, ConfirmDialogModule],
                declarations: [MyBookingComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [{ provide: Router, useClass: RouterStub }, ConfirmationService]
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
            }));
        t.it('should have a bookings property initialize',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        t.expect(componentInstance.bookings.length).toBe(7);
                    });
            }));
        t.it('TC_09:To check what are the contents on the Page after clicking on Manage my Bookings',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(fixture.nativeElement.querySelectorAll('.btn green hidden-xs').length).toBe(1);
                        t.expect(fixture.nativeElement.querySelectorAll('p-datatable').length).toBe(1);
                    });
            }));
        t.it('TC_10:To check what are the contents of the Table provided',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(fixture.nativeElement.querySelector('p-datatable').innerHTML.search('Title')).not.toBe(-1);
                        t.expect(fixture.nativeElement.querySelector('p-datatable').innerHTML.search('Start Time')).not.toBe(-1);
                        t.expect(fixture.nativeElement.querySelector('p-datatable').innerHTML.search('End Time')).not.toBe(-1);
                        t.expect(fixture.nativeElement.querySelector('p-datatable').innerHTML.search('Attendees')).not.toBe(-1);
                        t.expect(fixture.nativeElement.querySelector('p-datatable').innerHTML.search('Conference Rooms')).not.toBe(-1);
                        t.expect(fixture.nativeElement.querySelector('p-datatable').innerHTML.search('Delete')).not.toBe(-1);
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_11:To check where delete is clickable When no records are available',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_12:To check whether “New Event” option is Clickable or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(fixture.nativeElement.querySelectorAll('.btn green hidden-xs').length).toBe(1);
                    });
            }));
        t.it('TC_13:To check whether page gets Redirected when clicked on “New Event”',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));

        t.it('TC_104:To check whether available record Can be deleted',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        componentInstance.confirm();
                        t.expect(componentInstance.msgs.length).toBe(1);
                    });
            }));
        t.it('TC_105: To check whether warning is displayed Before deleting the record',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_106: To check whether All Conference Rooms Link is provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_107: To check whether All Conference Rooms Link is redirected to main page properly Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
       
    });
};


@Component({
    selector: 'test-cmp',
    template: '<my-booking></my-booking>'
})
class TestComponent { }

class RouterStub {
    navigate(url: any) { return url; }
}