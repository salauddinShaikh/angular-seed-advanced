import { BaseComponent } from '../../../frameworks/core/index';
import { SelectItem } from 'primeng/primeng';

interface  FinalLeaveData {
  ID : number;
  start : Date;
  end : Date;
  numDays : number;
  leave : string;
  reason : string;
}

@BaseComponent({
  moduleId: module.id,
  selector: 'apply-leave',
  templateUrl: 'lms-applyleave.component.html'
})
export class LmsApplyLeavesComponent {

  leaves: SelectItem[];
  selectedLeave: any;
  numberofdays: number;
  start: Date;
  end: Date;
  reason: string;
  finalLeaveData: FinalLeaveData[] = [];
  leaveVisible = false;

  constructor() {
    this.leaves = [];
    this.leaves.push({ label: 'Select', value: null });
    this.leaves.push({ label: 'Leave', value: { id: 1, name: 'Leave' } });
    this.leaves.push({ label: 'Half Day Leave', value: { id: 2, name: 'Half Day Leave' } });
    this.leaves.push({ label: 'Absent(LWP)', value: { id: 3, name: 'Absent' } });
    this.leaves.push({ label: 'Half Day Absent(LWP)', value: { id: 4, name: 'Half Day Absent' } });

    
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
    this.finalLeaveData =  [];
    let buffData: any = { ID : 0, start:'', end:'', numDays:0 , leave : '', reason : '' };
    let bufDate : number = this.start.getDate();
    for (var i = 0; i <= this.numberofdays; i++) {
      buffData.ID = i;
      buffData.start= new Date(this.start.getFullYear(),this.start.getMonth(),(bufDate+i));
      buffData.end= new Date(this.start.getFullYear(),this.start.getMonth(),(bufDate+i));
      buffData.numDays = 1;
      buffData.leave = this.selectedLeave.name;
      buffData.reason = this.reason;
      this.finalLeaveData.push(buffData);
      buffData = { ID : 0, start:'', end:'', numDays:0 , leave : '', reason : '' };
      console.log(JSON.stringify(this.finalLeaveData[this.finalLeaveData.length-1]));
      debugger;
    }
    this.leaveVisible = true;
    console.log(JSON.stringify(this.finalLeaveData));
  }

  delLeaveRec(event){
    console.log("delete record clicked ==> "+JSON.stringify(event));
  }
}
