// angular
import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../frameworks/test/index';
import { CoreModule } from '../../../frameworks/core/core.module';

// app
import { LmsHolidaysComponent } from './lms-holidays.component';
import * as localForage from "localforage";

export function main() {

    t.describe('Component: SingleApproval', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule],
                declarations: [LmsHolidaysComponent, TestComponent],
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

                    var calTitle = fixture.nativeElement.querySelectorAll('h4')[0].innerHTML;
                    var calYear = calTitle.split(' ');
                    var date = new Date();
                    let month: string = '';
                    switch (date.getMonth()) {
                        case 1:
                            month = 'January';
                            break;
                        case 2:
                            month = 'February';
                            break;
                        case 3:
                            month = 'March';
                            break;
                        case 4:
                            month = 'April';
                            break;
                        case 5:
                            month = 'May';
                            break;
                        case 6:
                            month = 'June';
                            break;
                        case 7:
                            month = 'July';
                            break;
                        case 8:
                            month = 'August';
                            break;
                        case 9:
                            month = 'September';
                            break;
                        case 10:
                            month = 'October';
                            break;
                        case 11:
                            month = 'November';
                            break;
                        case 12:
                            month = 'December';
                            break;
                        default:
                            month = '';
                            break;
                    }

                    t.e(calYear[1]).toBe(date.getFullYear());
                    t.e(calYear[0]).toBe(month);

                });
        });
    });

    t.describe('should contain all tables', () => {
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    let fixture = TestBed.createComponent(TestComponent);
                    fixture.detectChanges();

                    var table = fixture.nativeElement.getElementsByClassName('undefined');
                    var tHead = table.nativeElement.querySelectorAll('thead')[0];
                    var tr = tHead.nativeElement.querySelectorAll('tr')[0];

                    t.e(tr.nativeElement.querySelectorAll('th').length).toBe(4);
                });
        });
    });

}

@Component({
    selector: 'view-holidays',
    template: '<sd-viewholidays></sd-viewholidays>'
})
class TestComponent { }




// t.it('should find page content',()=>{
//                     t.e(compiled).toBeDefined();
//                 });

//                 t.it('checks page-load component status',()=>{
//                     de = fixture.debugElement.query(By.css('.fc-toolbar'));
//                     el = de.nativeElement();

//                     var calTitle = el.getAttribute('text');
//                     var cal = calTitle.split(' ');
//                     var dateTemp = new Date();
//                     t.e(cal[1]).toContain(dateTemp.getFullYear());
//                     t.e(el).toBeDefined();

//                     fixture.detectChanges();

//                     de = fixture.debugElement.query(By.css('.ui-datatable-tablewrapper'));
//                     el = de.nativeElement();
//                     el.getElementsByTagName('THEAD');
//                     t.e(el).not.toBeNull();
//                 });