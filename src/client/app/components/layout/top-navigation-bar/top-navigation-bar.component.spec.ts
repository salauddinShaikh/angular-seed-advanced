import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { RouterTestingModule} from '@angular/router/testing';
import { TopNavigationBarComponent } from './top-navigation-bar.component';
import { t } from '../../../frameworks/test/index';
import { MultilingualModule } from '../../../frameworks/i18n/multilingual.module';
import { LoginService } from '../../../shared/services/login.service';

export function main() {

    t.describe('Component: TopNavigationBarComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports:[MultilingualModule,RouterTestingModule],
                declarations: [TopNavigationBarComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA],
                 providers: [
                    { provide: LoginService, useValue: MockLoginService },
                    { provide: Router, useClass: RouterStub }
                ]
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
        t.it('should have a top-menu class',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(fixture.nativeElement.querySelectorAll('.top-menu').length).toBe(1);
                    });
            }));
    });
};


@Component({
    selector: 'test-cmp',
    template: '<top-navigation-bar></top-navigation-bar>'
})
class TestComponent { }

class MockLoginService {
    public logout() {
        return;
    }
}
class RouterStub {
    navigate(url: any) { return url; }
}
