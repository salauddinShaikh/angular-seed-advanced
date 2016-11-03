import { BaseComponent } from '../../../frameworks/core/index';

@BaseComponent({
  moduleId: module.id,
  selector: 'view-holidays',
  templateUrl: 'lms-holidays.component.html',
  styleUrls: ['lms-holidays.component.css']
})
export class LmsHolidaysComponent {

    servRows = 5;
    holidays :any[];
    events :any[];

    ngOnInit() {
      this.holidays = [
        {title:'Lakshmi Puja',date:'30-10-2016',day:'Sunday',type:'fixed'},
        {title:'Bhai Duj',date:'01-11-2016',day:'Tuesday',type:'fixed'},
        {title:'Christmas',date:'25-12-2016',day:'Sunday',type:'fixed'},
        {title:'New Year',date:'01-01-2017',day:'Sunday',type:'fixed'},
        {title:'Makar Sankaranti',date:'14-01-2017',day:'Saturday',type:'fixed'},
        {title:'Republic Day',date:'26-01-2017',day:'Thursday',type:'fixed'},
        {title:'Holi',date:'13-03-2017',day:'Monday',type:'fixed'},
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


}
