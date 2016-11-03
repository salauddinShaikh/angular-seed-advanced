import { BaseComponent } from '../../frameworks/core/index';
import { OnInit } from '@angular/core';
import { Router} from '@angular/router';
import * as moment from 'moment/moment';

@BaseComponent({
    moduleId: module.id,
    selector: 'conference-booking',
    templateUrl: 'conference.component.html',
    styleUrls: ['conference.component.css']
})
export class ConferenceComponent implements OnInit {
    events: any[];
    header: any;
    event: MyEvent;
    dialogVisible: boolean = false;
    idGen: number = 100;
    headerConfig: any;
    minTime: string;
    maxTime: string;
    conferenceRooms: any[];
    constructor(private router: Router) { }
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
        this.event = new MyEvent();
        this.event.start = event.date.format();
        this.dialogVisible = true;
    }
    handleEventClick(e: any) {
        //this.router.navigate(['/book']);
    }

}
class MyEvent {
    id: number;
    title: string;
    start: string;
    end: string;
    allDay: boolean = true;
}
