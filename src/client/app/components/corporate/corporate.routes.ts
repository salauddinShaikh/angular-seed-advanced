import { Route } from '@angular/router';
import { ConferenceComponent } from './components/conference-booking/conference/conference.component';
import { BookComponent } from './components/conference-booking/book-conference/book-conference.component';
import { MyBookingComponent } from './components/conference-booking/my-booking/my-booking.component';

export const CorporateRoutes: Route[] = [
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
