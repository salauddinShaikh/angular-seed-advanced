import {Directive, ElementRef, OnInit, Input} from '@angular/core';
@Directive({
    selector: '[ifAuthorize]'
})
export class IfAuthorize implements OnInit {

    @Input('ifAuthorize') permissions: Array<string>;
    private _element: HTMLElement;

    constructor(_element: ElementRef) {
        this._element = _element.nativeElement;
    }

    ngOnInit() {
        let userHasPermissions = false
        if (localStorage.getItem('loggedInUserPermission') != null) {
            let loggedInUserPermission = JSON.parse(localStorage.getItem('loggedInUserPermission'))
            for (var i = 0; i < this.permissions.length; i++) {
                if (loggedInUserPermission.indexOf(this.permissions[i]) == -1) {
                    userHasPermissions = false;
                }
                else {
                    userHasPermissions = true
                }
            }
            if (!userHasPermissions) {
                this._element.style.display = 'none'
            }
        }
        else{
            this._element.style.display = 'none'
        }
    }
}
