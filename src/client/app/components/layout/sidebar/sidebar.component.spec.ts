import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SidebarComponent } from './sidebar.component';
import { Component } from '@angular/core';
import { t } from '../../../frameworks/test/index';
import { Router} from '@angular/router';
import { RouterTestingModule} from '@angular/router/testing';

import { LoginService } from '../../../shared/services/login.service';
import { MultilingualModule } from '../../../frameworks/i18n/multilingual.module';
import { NameListService, nameListReducer, NameListEffects } from '../../../frameworks/sample/index';
import { CoreModule } from '../../../frameworks/core/core.module';
import { multilingualReducer, MultilingualEffects } from '../../../frameworks/i18n/index';


export function main() {

    t.describe('Component: SidebarComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule, RouterTestingModule, MultilingualModule,
                    StoreModule.provideStore({ i18n: multilingualReducer, names: nameListReducer }),
                    EffectsModule.run(NameListEffects),
                    EffectsModule.run(MultilingualEffects)],
                declarations: [SidebarComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    NameListService,
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
        t.it('should have a page-sidebar-wrapper class',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(fixture.nativeElement.querySelectorAll('.page-sidebar-wrapper').length).toBe(1);
                    });
            }));
        t.it('should have isUserMenuOpen property set to false',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        t.expect(componentInstance.isUserMenuOpen).toBe(false);
                    });
            }));
        t.it('should have isUserMenuOpen property set to true',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        componentInstance.toggleUserMenu();
                        t.expect(componentInstance.isUserMenuOpen).toBe(true);
                    });
            }));
    });
};


@Component({
    selector: 'test-cmp',
    template: '<sidebar></sidebar>'
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
