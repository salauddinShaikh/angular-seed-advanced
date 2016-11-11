import { BaseComponent } from '../../frameworks/core/index';

@BaseComponent({
    moduleId: module.id,
    selector: 'change-password-component',
    templateUrl: 'change-password.component.html',
    styleUrls: ['change-password.component.css']
})

export class ChangePasswordComponent {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;

    newPasswordWarning: string = '';
    oldPasswordWarning: string = '';

    //enable submit button on isFormClean === true
    isFormClean: boolean = false;

    confirmPasswordValidation() {
        if (this.newPassword !== this.confirmPassword) {
            this.newPasswordWarning = 'Passwords donot match';
            this.isFormClean = false;
        } else if (this.newPassword === this.confirmPassword) {
            this.newPasswordWarning = '';
            this.isFormClean = true;
        }
    }

    changePassword() {
        alert('Password : ' + this.confirmPassword);
    }
}
