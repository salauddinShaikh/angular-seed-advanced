/** Angular Dependencies */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

/** Other Module Dependencies */
import {CommonModule, TranslateModule} from '../../shared/index';

/** Module level Dependencies */
import { ConferenceComponent } from './components/conference-booking/conference/conference.component';
import { BookComponent } from './components/conference-booking/book-conference/book-conference.component';
import { MyBookingComponent } from './components/conference-booking/my-booking/my-booking.component';
import { LogTicketComponent } from './components/ticket/log-ticket/log-ticket.component';
import { ManageTicketComponent } from './components/ticket/manage-ticket/manage-ticket.component';

/** Module Import Declarations */
let imports = [FormsModule,BrowserModule,CommonModule, TranslateModule];

/** Component/Directive Declarations */
let declarations = [ConferenceComponent,
    BookComponent,
    MyBookingComponent,
    LogTicketComponent,
    ManageTicketComponent
    ];

/** Providers Declarations*/
let providers = [];

/** Module Definition */
@NgModule({
    imports,
    declarations,
    providers,
})
export class CorporateModule { }
