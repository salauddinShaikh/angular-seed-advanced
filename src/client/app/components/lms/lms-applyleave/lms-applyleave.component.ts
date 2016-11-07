import { BaseComponent } from '../../../frameworks/core/index';
import { SelectItem } from 'primeng/primeng';

interface FinalLeaveData {
  ID: number;
  start: Date;
  end: Date;
  numDays: number;
  leave: string;
  reason: string;
}

@BaseComponent({
  moduleId: module.id,
  selector: 'apply-leave',
  templateUrl: 'lms-applyleave.component.html',
  styleUrls: ['lms-applyleave.component.css']
})
export class LmsApplyLeavesComponent implements OnInit{

  leaves: SelectItem[];
  selectedLeave: any;
  numberofdays: number;
  start: any;
  end: Date;
  reason: string;
  finalLeaveData: FinalLeaveData[] = [];
  leaveVisible = false;

  constructor() {
    this.leaves = [];
    this.leaves.push({ label: 'Select', value:{ id: 0, name: 'Select' } });
    this.leaves.push({ label: 'Leave', value: { id: 1, name: 'Leave' } });
    this.leaves.push({ label: 'Half Day Leave', value: { id: 2, name: 'Half Day Leave' } });
    this.leaves.push({ label: 'Absent(LWP)', value: { id: 3, name: 'Absent' } });
    this.leaves.push({ label: 'Half Day Absent(LWP)', value: { id: 4, name: 'Half Day Absent' } });

  }

  ngOnInit(){
    let today = new Date();
    //this.start = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
  }


  addLeaves(event) {
    console.log(JSON.stringify(this.start));
    this.numberofdays = this.dayDiffCalc(this.start, this.end);
    console.log('selectedLeave : ' + JSON.stringify(this.selectedLeave) + ' num of days : ' + JSON.stringify(this.numberofdays) + ' reason : ' + this.reason);
    this.fillFinalLeaveData();
  }

  dayDiffCalc(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }

  fillFinalLeaveData() {
    this.finalLeaveData = [];
    let buffData: any = { ID: 0, start: '', end: '', numDays: 0, leave: '', reason: '' };
    let bufDate: number = this.start.getDate();
    for (var i = 0; i <= this.numberofdays; i++) {
      buffData.ID = i;
      buffData.start = new Date(this.start.getFullYear(), this.start.getMonth(), (bufDate + i));
      buffData.end = new Date(this.start.getFullYear(), this.start.getMonth(), (bufDate + i));
      buffData.numDays = 1;
      buffData.leave = this.selectedLeave.name;
      buffData.reason = this.reason;
      this.finalLeaveData.push(buffData);
      buffData = { ID: 0, start: '', end: '', numDays: 0, leave: '', reason: '' };
      console.log(JSON.stringify(this.finalLeaveData[this.finalLeaveData.length - 1]));

    }
    this.leaveVisible = true;
    console.log(JSON.stringify(this.finalLeaveData));
  }

  delLeaveRec(event) {
    console.log('delete record clicked ==> ' + JSON.stringify(event));
    this.finalLeaveData.forEach((element, event)=> {
      if (element.ID == event.ID) {
        console.log(true);
      }
    });
  }

  leaveTypeChenged(event) {
    switch (event.value.id) {
      case 1:
      {
        this.numberofdays = 1;
      }
        break;
      case 2:
      {
        this.numberofdays = 0.5;
      }
        break;
      case 3:
      {
        this.numberofdays = 1;
      }
        break;
      case 4:
      {
        this.numberofdays = 0.5;
      }
        break;

      default:
      {
        this.numberofdays = 0;
      }
        break;
    }
  }
}
