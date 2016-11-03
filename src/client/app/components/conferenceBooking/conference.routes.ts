import { Route } from '@angular/router';
import { ConferenceComponent } from './conference.component';
import { BookComponent } from './bookConference.component';
import { MyBookingComponent } from './myBooking.component';

export const ConferenceRoutes: Route[] = [
  {
    path: 'conferenceBooking',
    component: ConferenceComponent,
    data: {
      permissions: ['ConferenceBook.READ']
    }
  },
  {
    path: 'newBooking',
    component: BookComponent,
    data: {
      permissions: ['ConferenceBook.CREATE']
    }
  },
  {
    path: 'myBookings',
    component: MyBookingComponent,
     data: {
      permissions: ['ConferenceBook.DELETE']
    }
  }
];
