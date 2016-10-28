import { BaseComponent } from '../../frameworks/core/index';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@BaseComponent({
  moduleId: module.id,
  selector: 'conference-booking',
  templateUrl: 'conference.component.html',
  styleUrls: ['conference.component.css']
})
export class ConferenceComponent implements OnInit  {
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
        this.minTime = "07:00:00";
        this.maxTime = "20:00:00";
        this.headerConfig = {
            left: 'prev,next today',
            center: 'title',
            right: 'agendaWeek,agendaDay'
        };
        this.events = [
            {
                "title": "All Day Event",
                "start": "2016-10-25",
                "end": "2016-10-25",
                'color': '#E7C5F5'
            },
            {
                "title": "Long Event",
                "start": "2016-10-26",
                "end": "2016-10-26",
                 'color': '#3FABA4'
            },
            {
                "title": "Repeating Event",
                "start": "2016-10-23T16:00:00",
                 'color': '#35AA47'
            },
            {
                "title": "Repeating Event",
                "start": "2016-10-27T16:00:00",
                  'color': '#FF9655'
            },
            {
                "title": "Conference",
                "start": "2016-10-24",
                "end": "2016-10-25",
                'color': '#428BCA'
            }
        ];
        this.conferenceRooms = [{
            name: 'Bahamas',
            color: '#E7C5F5'
        },
        {
            name: 'Dubai',
            color: '#3FABA4'
        },{
            name: 'Cape Town',
            color: '#35AA47'
        },{
            name: 'Hong Kong',
            color: '#FF9655'
        },{
            name: 'Caribbean',
            color: '#8877A9'
        },{
            name: 'Houston	',
            color: '#428BCA'
        },{
            name: 'Barcelona',
            color: '#D05454'
        },{
            name: 'Trainning Room',
            color: '#DFBA49'
        },
        ]
    }

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