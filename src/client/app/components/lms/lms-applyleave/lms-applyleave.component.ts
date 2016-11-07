import { BaseComponent } from '../../../frameworks/core/index';
import { SelectItem } from 'primeng/primeng';

class FinalLeaveData {
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
export class LmsApplyLeavesComponent{

  leaves: SelectItem[];
  finalLeaveData: FinalLeaveData[] = [];

  selectedLeave: any;
  showNumDays : number;
  numberofdays: number;
  start: any;
  end: Date;
  reason: string;

  initCalDate: any;
  warning: any;

  showWarning: boolean = false;
  startDateDisabled: boolean;
  endDateDisabled: boolean;
  isHalfDay: boolean;
  leaveVisible = false;

  constructor() {
    this.leaves = [];
    this.leaves.push({ label: 'Select', value: { id: 0, name: 'Select' } });
    this.leaves.push({ label: 'Leave', value: { id: 1, name: 'Leave' } });
    this.leaves.push({ label: 'Half Day Leave', value: { id: 2, name: 'Half Day Leave' } });
    this.leaves.push({ label: 'Absent(LWP)', value: { id: 3, name: 'Absent' } });
    this.leaves.push({ label: 'Half Day Absent(LWP)', value: { id: 4, name: 'Half Day Absent' } });

    this.isHalfDay = true;
    this.startDateDisabled = true;
    this.endDateDisabled = true;
    let today = new Date();
    this.end = today;
    this.start = today;
}


  addLeaves(event) {
    console.log(JSON.stringify(this.start));
    this.numberofdays = this.dayDiffCalc(this.start, this.end);
    this.showNumDays = this.numberofdays + 1;
    
    if (this.numberofdays < 0) {

    }

    console.log('selectedLeave : ' + JSON.stringify(this.selectedLeave) + ' num of days : ' + JSON.stringify(this.numberofdays) + ' reason : ' + this.reason);
    this.fillFinalLeaveData();

    if (this.reason == '') {

    }
    else if (this.reason != '') {

    }
  }

  dayDiffCalc(first, second) {
    var dayCount = Math.round((second - first) / (1000 * 60 * 60 * 24));
    
    return dayCount+1;
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
    this.showNumDays = this.numberofdays = this.finalLeaveData.length;
    this.leaveVisible = true;
    console.log(JSON.stringify(this.finalLeaveData));
  }

  delLeaveRec(event) {
    console.log('delete record clicked ==> ' + JSON.stringify(event));
    let deleteId: number;
    for (var i = 0; i < this.finalLeaveData.length; i++) {
      if (this.finalLeaveData[i].ID == event.ID) {
        deleteId = i;
        break;
      }
    }
    for (var i = deleteId; i < this.finalLeaveData.length; i++) {
      if (i + 1 < this.finalLeaveData.length) {
        this.finalLeaveData[i] = this.finalLeaveData[i + 1];
      }
    }
    this.finalLeaveData.pop();
    this.showNumDays = this.numberofdays = this.finalLeaveData.length;
  }

  leaveTypeChanged(event) {
    switch (event.value.id) {
      case 1:
        {
          this.showNumDays = this.numberofdays = 1;
          this.startDateDisabled = false;
          this.endDateDisabled = false;
          this.isHalfDay = true;
        }
        break;
      case 2:
        {
          this.showNumDays = this.numberofdays = 0.5;
          this.startDateDisabled = false;
          this.endDateDisabled = true;
          this.end = this.start
          this.isHalfDay = true;
        }
        break;
      case 3:
        {
          this.showNumDays = this.numberofdays = 1;
          this.startDateDisabled = false;
          this.endDateDisabled = false;
          this.isHalfDay = true;
        }
        break;
      case 4:
        {
          this.showNumDays = this.numberofdays = 0.5;
          this.startDateDisabled = false;
          this.endDateDisabled = true;
          this.end = this.start
          this.isHalfDay = true;
        }
        break;

      default:
        {
          this.numberofdays = this.showNumDays = 0;
          this.startDateDisabled = true;
          this.endDateDisabled = true;
        }
        break;
    }
  }


  updateEndDate(event){
    if (this.isHalfDay) {
      this.end = this.start;
    }
    this.isHalfDay = false;
  }
}
