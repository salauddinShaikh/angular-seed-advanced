import { BaseComponent } from '../../frameworks/core/index';
import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';

@BaseComponent({
    moduleId: module.id,
    selector: 'login-component',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {
    public errorMessage: string;
    private model: User;
    constructor(private _loginService: LoginService, private _router: Router) {
      this.model = new User('', '');
    }
    doLogin(): void {
        this._loginService.authenticate(this.model)
            .subscribe(
            results => {
                //this.getLoggedInUserPermission();
                this._router.navigate(['/']);
            },
            error => {
            this.errorMessage = <any>error;
            });
    }
    getLoggedInUserPermission(): void {
        this._loginService.getLoggedInUserPermission()
            .subscribe(
            results => {
                this._router.navigate(['/']);
            },
            error => this.errorMessage = <any>error);
    }
}
class User{
  constructor(
    public Password: string,
    public UserName: string
  ) {  }
}