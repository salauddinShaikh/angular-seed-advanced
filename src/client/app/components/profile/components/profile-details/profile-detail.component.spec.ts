import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { t } from '../../../../frameworks/test/index';

import { ProfileDetailsComponent } from './profile-details.component';

const testModuleConfig = () => {
    TestBed.configureTestingModule({
        declarations: [
            TestComponent, ProfileDetailsComponent,
        ]
    });
};

export function main() {

    t.describe('Component: ProfileDetailsComponent', () => {
        t.be(testModuleConfig);
        t.it('should have a defined component', () => {
            t.it('should build without a problem',
                t.async(() => {
                    TestBed.compileComponents()
                        .then(() => {
                            let fixture = TestBed.createComponent(TestComponent);
                            fixture.detectChanges();
                            t.e(TestComponent).toBeDefined();
                        });
                }));
        });
    });
};

@Component({
    selector: 'test-cmp',
    template: '<profile-details></profile-details>'
})
class TestComponent { }
