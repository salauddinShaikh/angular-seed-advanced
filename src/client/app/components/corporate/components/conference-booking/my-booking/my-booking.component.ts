/** Other Module Dependencies */
import { ConfirmationService } from 'primeng/primeng';
import { Message } from 'primeng/primeng';

/** Framework Dependencies */
import {BaseComponent} from '../../views/base-component';

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'my-booking',
    templateUrl: 'my-booking.component.html',
})

export class MyBookingComponent {
    bookings: Array<Object>;
    msgs: Message[] = [];

    constructor(private confirmationService: ConfirmationService) {
        this.bookings = [{
            'title': 'Inteview',
            'startTime': '24/10/2016 10:00',
            'endTime': '24/10/2016 12:00',
            'attendees': 'xyz',
            'room': 'Hongkong',
        },
        {
            'title': 'Jenzabar Client call',
            'startTime': '25/10/2016 10:00',
            'endTime': '25/10/2016 12:00',
            'attendees': 'xyz',
            'room': 'Bahamas',
        },
        {
            'title': 'Product Meeting',
            'startTime': '26/10/2016 10:00',
            'endTime': '26/10/2016 12:00',
            'attendees': 'xyz',
            'room': 'Barcelona',
        },
        {
            'title': 'Tccc client call',
            'startTime': '27/10/2016 10:00',
            'endTime': '28/10/2016 12:00',
            'attendees': 'xyz',
            'room': 'Hongkong',
        },
        {
            'title': 'NGO/NPO Meeting',
            'startTime': '29/10/2016 10:00',
            'endTime': '29/10/2016 12:00',
            'attendees': 'xyz',
            'room': 'Training Room',
        },
        {
            'title': 'Standup Meeting',
            'startTime': '22/10/2016 10:00',
            'endTime': '22/10/2016 12:00',
            'attendees': 'xyz',
            'room': 'Cape Town',
        },
        {
            'title': 'Inteview',
            'startTime': '25/10/2016 10:00',
            'endTime': '25/10/2016 12:00',
            'attendees': 'xyz',
            'room': 'Houston',
        }
        ];
    }

    confirm() {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.msgs = [];
                this.msgs.push({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
            }
        });
    }
}
