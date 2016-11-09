import { BaseComponent } from '../../../frameworks/core/index';
import {Input } from '@angular/core';

@BaseComponent({
  moduleId: module.id,
  selector: 'notification',
  templateUrl: 'notification.component.html',
})

export class NotificationComponent {
    @Input('name') notificationName: string;
    @Input('icon') iconClass: string;
    @Input('badge') badgeClass: string;
    @Input('datalist') pendingNotification: any;
}
