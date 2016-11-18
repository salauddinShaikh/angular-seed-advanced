import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { Router} from '@angular/router';

import { ConferenceComponent } from './conference.component';
import { t } from '../../../../../frameworks/test/index';
import { CoreModule } from '../../../../../frameworks/core/core.module';
import { SharedModule, ScheduleModule} from 'primeng/primeng';
import * as moment from 'moment/moment';

export function main() {

    t.describe('Component: MyBookingComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule, RouterTestingModule, SharedModule, ScheduleModule],
                declarations: [ConferenceComponent, TestComponent],
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
            }));
        t.it('should have initialize component',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        fixture.detectChanges();
                        t.e(componentInstance.allEvents.length).toBe(8);
                        t.e(componentInstance.conferenceRooms.length).toBe(8);
                        t.e(TestComponent).toBeDefined();
                    });
            }));
        t.it('should call handleEventClicked method',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        fixture.detectChanges();
                        componentInstance.handleEventClicked({calEvent:{start:'start', end:'end'}});
                        t.e(componentInstance.selectedEvent.start).toBe('start');
                        t.e(componentInstance.selectedEvent.end).toBe('end');
                    });
            }));
        t.it('should call getEventByRooms method',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        fixture.detectChanges();
                        componentInstance.getEventByRooms('Bahamas');
                        t.e(componentInstance.selectedEvent.selectedRoom).toBe('Bahamas');
                    });
            }));
        t.it('TC_01: To check what is displayed on the Screen when conference booking is Selected',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        t.expect(componentInstance.bookings.length).toBe(7);
                        t.expect(fixture.nativeElement.querySelectorAll('.fc-agendaDay-view').length).toBe(1);
                    });
            }));
        t.it('TC_02: To check what are the contents on the Page Conference booking',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(fixture.nativeElement.querySelectorAll('.fc-agendaDay-view').length).toBe(1);
                        t.expect(fixture.nativeElement.querySelectorAll('.color-list').length).toBe(8);
                        t.expect(fixture.nativeElement.querySelector('button.btn.btn-default').innerHTML).toBe('Manage My Booking');
                        t.expect(fixture.nativeElement.querySelectorAll('button.fc-month-button').length).toBe(1);
                        t.expect(fixture.nativeElement.querySelectorAll('button.fc-agendaWeek-button').length).toBe(1);
                        t.expect(fixture.nativeElement.querySelectorAll('button.fc-agendaDay-button').length).toBe(1);
                    });
            }));
        t.it('TC_03: To check whether different conference Rooms are displayed or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(fixture.nativeElement.querySelectorAll('.color-list').length).toBe(8);
                    });
            }));
        t.it('TC_04: To check whether each conference Rooms are having unique colors or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(fixture.nativeElement.querySelectorAll('.color-list').length).toBe(8);
                    });
            }));
        t.it('TC_05:To check whether Day View is Displayed on the main page or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(fixture.nativeElement.querySelectorAll('.fc-agendaDay-view').length).toBe(1);
                    });
            }));
        t.it('TC_06:To check whether current date is Present above the Day View or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(fixture.nativeElement.querySelector('.fc-toolbar').innerHTML.search(moment().format('MMMM DD, YYYY'))).not.toBe(-1);
                    });
            }));
        t.it('TC_07:To check whether any option provided For booking conference room or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(fixture.nativeElement.querySelector('button.btn.btn-default').innerHTML).toBe('Manage My Booking');
                    });
            }));
        t.it('TC_08:To check whether Link provided for Booking conference room is Redirecting on another page or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(true).toBe(false);
                    });
            }));
        t.it('TC_108:To check whether in Day View where Current date is provided; date can be Switched and accordingly the bookings For that particular date is provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_109:To check whether in week View where Current week is provided; week can be Switched and accordingly the bookings For that particular week is provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_110:To check whether in Month View where Current Month is provided; Month can be Switched and accordingly the bookings For that particular Month is provided or not',
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
    template: '<conference-booking></conference-booking>'
})
class TestComponent { }

class RouterStub {
    navigate(url: any) { return url; }
}
