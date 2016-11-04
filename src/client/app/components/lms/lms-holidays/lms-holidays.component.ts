import { BaseComponent } from '../../../frameworks/core/index';
import { HolidayService } from '../../../shared/index';
import { Store } from '@ngrx/store';
import { AppState } from '../../../domain/appState';

export class MyEvent {
  id: number;
  title: string;
  start: string;
  end: string;
  allDay: boolean = true;
}

export class Holiday {
  title: string;
  date: string;
  day: string;
  type: string;
}

@BaseComponent({
  moduleId: module.id,
  selector: 'view-holidays',
  templateUrl: 'lms-holidays.component.html',
  styleUrls: ['lms-holidays.component.css']
})

export class LmsHolidaysComponent {

    servRows = 7;

    holidays :any[];
    events :any[];

    eventDay : MyEvent;
    dialogVisible: boolean = false;

    holidayDetails: boolean = false;
    holidayTitle :string;
    holidayDay :string;
    holidayDate :string;
    holidayType :string;

private holidayRecords;
  private subscription;

  constructor(private store: Store<AppState>, private holidayService: HolidayService) {
    let holidayRecords = this.holidayRecords;
    // this.subscription = store.select('holidays')
    //   .subscribe(holidays => {
    //     holidayRecords = holidays;
    //     if (holidayRecords.length === 0) {
    //       holidayService.getHolidays();
    //     }
    //   });
  }

    ngOnInit() {
      this.holidays = [
        {title:'Lakshmi Puja',date:'30-10-2016',day:'Sunday',type:'Fixed'},
        {title:'Bhai Duj',date:'01-11-2016',day:'Tuesday',type:'Fixed'},
        {title:'Christmas',date:'25-12-2016',day:'Sunday',type:'Fixed'},
        {title:'New Year',date:'01-01-2017',day:'Sunday',type:'Fixed'},
        {title:'Makar Sankaranti',date:'14-01-2017',day:'Saturday',type:'Fixed'},
        {title:'Republic Day',date:'26-01-2017',day:'Thursday',type:'Fixed'},
        {title:'Holi',date:'13-03-2017',day:'Monday',type:'Fixed'},
      ];

      this.events = [
        {'title':'Lakshmi Puja', 'start':'2016-10-30'},
        {'title':'Bhai Duj', 'start':'2016-11-01'},
        {'title':'Christmas', 'start':'2016-12-25'},
        {'title':'New Year', 'start':'2017-01-01'},
        {'title':'Makar Sankaranti', 'start':'2017-01-14'},
        {'title':'Republic Day', 'start':'2017-01-26'},
        {'title':'Holi', 'start':'2017-03-13'},
      ];
    }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
    handleEventClicked(event){
      let show = true;
      this.eventDay = new MyEvent();
      this.eventDay.title = event.calEvent.title;
      let start = event.calEvent.start;
      start.stripTime();
      this.eventDay.id = event.calEvent.id;
      this.eventDay.start = start.format();
      this.dialogVisible = true;
    }

    clicked(holiday) {
      this.holidayDate = holiday.date;
      this.holidayDay = holiday.day;
      this.holidayTitle = holiday.title;
      this.holidayType = holiday.type;
      this.holidayDetails = true;
      
    }

}
