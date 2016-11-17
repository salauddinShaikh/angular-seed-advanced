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
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let myProfileDOMEl = fixture.debugElement.children[0].nativeElement;
                        t.e(TestComponent).toBeDefined();
                        t.e(myProfileDOMEl.querySelectorAll('span')[0].textContent).toEqual('LINKUP');
                        t.e(myProfileDOMEl.querySelectorAll('span')[0].textContent).toEqual('My Profile');
                        t.e(myProfileDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Nick');
                        t.e(myProfileDOMEl.querySelectorAll('li').length).toEqual(9);
                    });
            }));
        t.it('TC_02 : To check what are the contents of the Page',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let myProfileDOMEl = fixture.debugElement.children[0].nativeElement;
                        t.e(myProfileDOMEl.querySelectorAll('li')[0].textContent).toEqual('Personal Info');
                        t.e(myProfileDOMEl.querySelectorAll('li')[2].textContent).toEqual('Details');
                        t.e(myProfileDOMEl.querySelectorAll('li')[3].textContent).toEqual('Education');
                        t.e(myProfileDOMEl.querySelectorAll('li')[4].textContent).toEqual('Employment History');
                        t.e(myProfileDOMEl.querySelectorAll('li')[5].textContent).toEqual('Experience');
                        t.e(myProfileDOMEl.querySelectorAll('li')[6].textContent).toEqual('Skill Set');
                        t.e(myProfileDOMEl.querySelectorAll('li')[7].textContent).toEqual('Certification');
                        t.e(myProfileDOMEl.querySelectorAll('li')[8].textContent).toEqual('Achievement');
                    });
            }));
    });
};

@Component({
    selector: 'test-cmp',
    template: '<my-profile></my-profile>'
})
class TestComponent { }
