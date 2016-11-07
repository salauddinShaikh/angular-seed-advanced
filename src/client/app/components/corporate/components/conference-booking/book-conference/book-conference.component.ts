/** Framework Dependencies */
import {BaseComponent} from '../../views/base-component';

/** Other Module Dependencies */
import {SelectItem} from 'primeng/primeng';

/** Component Declaration */
@BaseComponent({
  moduleId: module.id,
  selector: 'book-conference',
  templateUrl: 'book-conference.component.html'
})

export class BookComponent {
    property:string;
    recurrance:boolean;
    recurrancePattern:string;
    recurranceEndDate:Date;
    conferenceRooms: SelectItem[];
    selectedRoom: string;
    startTime: Date;
    endTime:Date;

    constructor() {
        this.conferenceRooms = [];
        this.conferenceRooms.push({label:'Select Room', value:null});
        this.conferenceRooms.push({label:'Bahamas', value:{id:1, name: 'Bahamas', code: 'NY'}});
        this.conferenceRooms.push({label:'Dubai', value:{id:2, name: 'Dubai', code: 'RM'}});
        this.conferenceRooms.push({label:'Cape Town', value:{id:3, name: 'Cape Town', code: 'LDN'}});
        this.conferenceRooms.push({label:'Hong Kong', value:{id:4, name: 'Hong Kong', code: 'IST'}});
        this.conferenceRooms.push({label:'Houston', value:{id:4, name: 'Houston', code: 'IST'}});
        this.conferenceRooms.push({label:'Barcelona', value:{id:5, name: 'Barcelona', code: 'PRS'}});
        this.conferenceRooms.push({label:'Caribbean', value:{id:5, name: 'Caribbean', code: 'PRS'}});
        this.conferenceRooms.push({label:'Trainning Room', value:{id:5, name: 'Trainning Room', code: 'PRS'}});
    }
}
