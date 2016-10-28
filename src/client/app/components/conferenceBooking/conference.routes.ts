import { Route } from '@angular/router';
import { ConferenceComponent } from './conference.component';
import { BookComponent } from './bookConference.component';
import { MyBookingComponent } from './myBooking.component';

export const ConferenceRoutes: Route[] = [
  {
    path: 'conferenceBooking',
    component: ConferenceComponent
  },
   {
    path: 'newBooking',
    component: BookComponent
  },
  {
    path: 'myBookings',
    component: MyBookingComponent
  }
];
