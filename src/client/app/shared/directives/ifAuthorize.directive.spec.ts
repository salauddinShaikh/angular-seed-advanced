import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { IfAuthorize } from './ifAuthorize.directive';
import { LoginService } from '../services/login.service';

const testModuleConfig = () => {
    TestBed.configureTestingModule({
        declarations: [IfAuthorize, TestComponent],
    });
};

@Component({
    viewProviders: [
        { provide: LoginService, useClass: LoginMock }
    ],
    selector: 'testss-cmp',
    template: `<div [ifAuthorize]="['Timesheets.READ']"></div>`
})
class TestComponent { }

export function main() {
    describe('Shared: ifAuthorizeDirective', () => {
        console.log('IfAuthorize Directive-----------------------');
        it('should add platform class', () => {
            console.log('IfAuthorize Directive-----------------------');
        });
    });
}

class LoginMock {
    public onAuthStatusChange: any 
    public location: any = {};
    public authenticate(credentials: any) {
        return;
    }
    public getLoggedInUserPermission(): void {
        return;
    }
    public getAuthEmitter(): void {
        return;
    }
    public emitAuthEvent(): void {
        return;
    }
    public logout(): void {
        return;
    }
    public setLoggedInUserPermission(): void {
        return;
    }
    public handleError(): void {
        return;
    }
    public isAuthenticated(): void {
        return;
    }
}