import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { t } from '../../../../frameworks/test/index';

import { MyProfileComponent } from './my-profile.component';

const testModuleConfig = () => {
    TestBed.configureTestingModule({
        declarations: [
            TestComponent, MyProfileComponent,
        ]
    });
};

export function main() {

    t.describe('Component: MyProfileComponent', () => {
        t.be(testModuleConfig);
        t.it('TC_01 : To check what happens when clicked On My profile.',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_02 : To check what are the contents of the Page',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
    });
};

@Component({
    selector: 'test-cmp',
    template: '<my-profile></my-profile>'
})
class TestComponent { }
