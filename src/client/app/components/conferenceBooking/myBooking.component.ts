import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../frameworks/core/index';

@BaseComponent({
  moduleId: module.id,
  selector: 'my-booking',
  templateUrl: 'myBooking.component.html',
})

export class MyBookingComponent {
    bookings:Array<Object>;

    constructor(){
         this.bookings = [{
             'title':'Inteview',
             'startTime':'25/10/2016 10:00',
             'endTime':'25/10/2016 12:00',
             'attendees':'xyz',
             'room':'Hongkong',
             'delete':'Delete',
         }];
    }
}