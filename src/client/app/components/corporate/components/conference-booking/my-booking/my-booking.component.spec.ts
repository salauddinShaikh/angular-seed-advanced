import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { Router} from '@angular/router';

import { MyBookingComponent } from './my-booking.component';
import { t } from '../../../../../frameworks/test/index';
import { CoreModule } from '../../../../../frameworks/core/core.module';
import { SharedModule,ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
export function main() {

    t.describe('Component: MyBookingComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule, RouterTestingModule, SharedModule,ConfirmDialogModule],
                declarations: [MyBookingComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [{ provide: Router, useClass: RouterStub },ConfirmationService]
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
        t.it('should have a bookings property initialize',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        t.expect(componentInstance.bookings.length).toBe(7);
                    });
            }))
    })
};


@Component({
    selector: 'test-cmp',
    template: '<my-booking></my-booking>'
})
class TestComponent { }

class RouterStub {
    navigate(url: any) { return url; }
}