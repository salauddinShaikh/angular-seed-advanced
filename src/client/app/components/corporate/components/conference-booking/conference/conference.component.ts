/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router} from '@angular/router';

/** Framework Dependencies */
import {BaseComponent} from '../../views/base-component';

/** Other Module Dependencies */
import * as moment from 'moment/moment';

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'conference-booking',
    templateUrl: 'conference.component.html',
    styleUrls: ['conference.component.css']
})
export class ConferenceComponent implements OnInit {
    events: any[];
    header: any;
    selectedEvent: MyEvent;
    dialogVisible: boolean = false;
    idGen: number = 100;
    headerConfig: any;
    minTime: string;
    maxTime: string;
    conferenceRooms: any[];
    constructor(private router: Router) {
        this.selectedEvent = new MyEvent(0, '', '', '', false);
    }
    ngOnInit() {
        this.minTime = '07:00:00';
        this.maxTime = '20:00:00';
        this.headerConfig = {
            left: 'prev,next today',
            center: 'title',
            right: 'agendaWeek,agendaDay'
        };
        this.events = [
            {
                'title': 'Inteview',
                'start': moment().add(2, 'hours'),
                'end': moment().add(4, 'hours'),
                'color': '#8877A9'
            },
            {
                'title': 'Jenzabar Client call',
                'start': moment(),
                'end': moment().add(3, 'hours'),
                'color': '#3FABA4'
            },
            {
                'title': 'Product Meeting',
                'start': moment().subtract(3, 'hours'),
                'end': moment().subtract(1, 'hours'),
                'color': '#FF9655'
            },
            {
                'title': 'Tccc client call',
                'start': moment().subtract(3, 'hours'),
                'end': moment().subtract(2, 'hours'),
                'color': '#3FABA4'
            },
            {
                'title': 'Standup Meeting',
                'start': moment().add(1, 'd').subtract(3, 'hours'),
                'end': moment().add(1, 'd').subtract(1, 'hours'),
                'color': '#E7C5F5'
            },
            {
                'title': 'NGO/NPO Meeting',
                'start': moment().add(1, 'd').subtract(3, 'hours'),
                'end': moment().add(1, 'd').subtract(2, 'hours'),
                'color': '#8877A9'
            },
            {
                'title': 'Conference',
                'start': moment().subtract(1, 'd').subtract(3, 'hours'),
                'end': moment().subtract(1, 'd').subtract(2, 'hours'),
                'color': '#D05454'
            },
            {
                'title': 'Interview',
                'start': moment().subtract(1, 'd'),
                'end': moment().subtract(1, 'd').add(3, 'hours'),
                'color': '#DFBA49'
            }
        ];
        this.conferenceRooms = [{
            name: 'Bahamas',
            color: '#E7C5F5'
        },
            {
                name: 'Dubai',
                color: '#3FABA4'
            }, {
                name: 'Cape Town',
                color: '#35AA47'
            }, {
                name: 'Hong Kong',
                color: '#FF9655'
            }, {
                name: 'Caribbean',
                color: '#8877A9'
            }, {
                name: 'Houston	',
                color: '#428BCA'
            }, {
                name: 'Barcelona',
                color: '#D05454'
            }, {
                name: 'Trainning Room',
                color: '#DFBA49'
            },
        ];
    };

    handleDayClick(event: any) {
        this.router.navigate(['/newBooking']);
    }
    handleEventClicked(event: any) {
        this.selectedEvent = event.calEvent;
        this.selectedEvent.start = moment(this.selectedEvent.start).format('DD/MM/YY hh:MM a');
        this.selectedEvent.end = moment(this.selectedEvent.end).format('DD/MM/YY hh:MM a');
        console.log(this.selectedEvent);
        this.dialogVisible = true;
    }

}
class MyEvent {
    constructor(
        public id: number,
        public title: string,
        public start: string,
        public end: string,
        public allDay: boolean
    ) { }
}