import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../frameworks/core/index';

@BaseComponent({
    moduleId: module.id,
    selector: 'my-booking',
    templateUrl: 'myBooking.component.html',
})

export class MyBookingComponent {
    bookings: Array<Object>;

    constructor() {
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
}