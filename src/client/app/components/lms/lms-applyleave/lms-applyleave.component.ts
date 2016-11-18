import { BaseComponent } from '../../../frameworks/core/index';
import { SelectItem } from 'primeng/primeng';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as localForage from "localforage";


class FinalLeaveData {
  ID: number;
  start: Date;
  end: Date;
  numDays: number;
  leave: string;
  reason: string;
  empName: string;
  status: string;
}

class formFieldClass {
  constructor(
    public numDays: number,
    public leaveType: any,
    public end: Date,
    public start: Date,
    public reason: string
  ) { }
}

@BaseComponent({
  moduleId: module.id,
  selector: 'apply-leave',
  templateUrl: 'lms-applyleave.component.html',
  styleUrls: ['lms-applyleave.component.css']
})

export class LmsApplyLeavesComponent {

  leaveTypeInvalid: boolean = true;
  numDays: number = 0;
  leaves: any = [
    {label:'Leave',value:1},
    {label:'Half-day Leave',value:2},
    {label:'Absent',value:3},
    {label:'Half-day Absent',value:4}
  ];
  model = new formFieldClass(1,'select',new Date(), new Date(), 'personal reasons!');

  submitForm(form: NgForm){
    console.log(form);
    this.validateLeaveType();
    if(this.leaveTypeInvalid)
      return;

    //call to backend submit
    alert('!')
  }

  addLeaves(){
    console.log('addLeaves() was called');
  }

  validateLeaveType(){
    if(this.model.leaveType === 'select'){
      this.leaveTypeInvalid = true;
    } else {
      this.leaveTypeInvalid = false;
    }
  }
}

// export class LmsApplyLeavesComponent {

//   leaves: SelectItem[];
//   finalLeaveData: FinalLeaveData[] = [];

//   selectedLeave: any;
//   showNumDays: number;
//   numberofdays: number;
//   start: any;
//   end: any;
//   reason: string;
//   minEndDate: Date;

//   initCalDate: any;
//   warning: string = '';

//   showWarning: boolean = false;
//   startDateDisabled: boolean;
//   endDateDisabled: boolean;
//   isHalfDay: boolean;
//   leaveVisible :boolean = true;
//   formIsClean: boolean = false;

//   constructor() {
//     this.leaves = [];
//     this.leaves.push({ label: 'Select', value: { id: 0, name: 'Select' } });
//     this.leaves.push({ label: 'Leave', value: { id: 1, name: 'Leave' } });
//     this.leaves.push({ label: 'Half Day Leave', value: { id: 2, name: 'Half Day Leave' } });
//     this.leaves.push({ label: 'Absent(LWP)', value: { id: 3, name: 'Absent' } });
//     this.leaves.push({ label: 'Half Day Absent(LWP)', value: { id: 4, name: 'Half Day Absent' } });

//     this.isHalfDay = false;
//     this.startDateDisabled = true;
//     this.endDateDisabled = true;
//     let today = new Date();
//     this.end = today;
//     this.start = today;

//   }



//   dayDiffCalc(first, second) {
//     this.numberofdays = Math.round((second - first) / (1000 * 60 * 60 * 24));
//     this.showNumDays = this.numberofdays += 2;
//   }

//   fillFinalLeaveData() {
//     this.finalLeaveData = [];
//     let buffData: any = { ID: 0, start: '', end: '', numDays: 0, leave: '', reason: '', empName: '', status: '' };
//     let bufDate: number = this.start.getDate();

//     if (this.formIsClean) {

//       if (!this.isHalfDay) {
//         for (var i = 0; i < this.numberofdays; i++) {
//           buffData.ID = i;
//           buffData.start = (bufDate + i) + '/' + this.start.getMonth() + '/' + this.start.getFullYear();
//           buffData.end = (bufDate + i) + '/' + this.start.getMonth() + '/' + this.start.getFullYear();
//           buffData.numDays = 1;
//           buffData.leave = this.selectedLeave;
//           buffData.reason = this.reason;
//           buffData.empName = 'Employee Name';
//           buffData.status = 'Pending';

//           this.finalLeaveData.push(buffData);
//           buffData = { ID: 0, start: '', end: '', numDays: 0, leave: '', reason: '' };
//         }
//         this.showNumDays = this.numberofdays = this.finalLeaveData.length;

//       } else {
//         if (this.isHalfDay) {
//           this.numberofdays = 0.5;
//           buffData.ID = 0;
//           buffData.start = (bufDate) + '/' + this.start.getMonth() + '/' + this.start.getFullYear();
//           buffData.end = (bufDate) + '/' + this.start.getMonth() + '/' + this.start.getFullYear();
//           buffData.numDays = this.numberofdays;
//           buffData.leave = this.selectedLeave;
//           buffData.reason = this.reason;
//           buffData.empName = 'Employee Name';
//           buffData.status = 'Pending';
//           this.finalLeaveData.push(buffData);
//           buffData = { ID: 0, start: '', end: '', numDays: 0, leave: '', reason: '' };
//           this.showNumDays = this.numberofdays = 0.5;

//         }
//       }
//     }
//     if (this.formIsClean && (this.finalLeaveData.length > 0)) {
//       this.leaveVisible = false;
//     }

//   }

//   delLeaveRec(event) {
//     let deleteId: number;
//     for (var i = 0; i < this.finalLeaveData.length; i++) {
//       if (this.finalLeaveData[i].ID === event.ID) {
//         deleteId = i;
//         break;
//       }
//     }
//     for (var i = deleteId; i < this.finalLeaveData.length; i++) {
//       if (i + 1 < this.finalLeaveData.length) {
//         this.finalLeaveData[i] = this.finalLeaveData[i + 1];
//       }
//     }
//     this.finalLeaveData.pop();
//     this.showNumDays = this.numberofdays = this.finalLeaveData.length;
//     if (this.numberofdays > 0) {
//       this.leaveVisible = false;
//     }
//     else{
//       this.leaveVisible = true;
//     }
//     this.showNumDays = this.numberofdays = this.finalLeaveData.length;
//   }

//   leaveTypeChanged(event) {

//     switch (event.value.id) {
//       case 1:
//         {
//           this.showNumDays = this.numberofdays = 1;
//           this.startDateDisabled = false;
//           this.endDateDisabled = false;
//           this.isHalfDay = false;
//         }
//         break;
//       case 2:
//         {
//           this.showNumDays = this.numberofdays = 0.5;
//           this.startDateDisabled = false;
//           this.endDateDisabled = true;
//           this.end = this.start;
//           this.isHalfDay = true;
//         }
//         break;
//       case 3:
//         {
//           this.showNumDays = this.numberofdays = 1;
//           this.startDateDisabled = false;
//           this.endDateDisabled = false;
//           this.isHalfDay = false;
//         }
//         break;
//       case 4:
//         {
//           this.showNumDays = this.numberofdays = 0.5;
//           this.startDateDisabled = false;
//           this.endDateDisabled = true;
//           this.end = this.start;
//           this.isHalfDay = true;
//         }
//         break;

//       default:
//         {
//           this.numberofdays = this.showNumDays = 0;
//           this.startDateDisabled = true;
//           this.endDateDisabled = true;
//         }
//         break;
//     }
//   }


//   startSelected() {
//     this.end = this.start;
//   }

//   endSelected() {
//     this.dayDiffCalc(this.start, this.end);
//   }

//   addLeaves() {
//     if (!this.isHalfDay) {
//       this.dayDiffCalc(this.start, this.end);
//     } else {
//       if (this.isHalfDay) {
//         this.numberofdays = this.showNumDays = 0.5;
//       }
//     }
//     if (this.numberofdays < 0) {
//       this.warning = 'Check the Start Date and End Date!';
//       this.formIsClean = false;
//     } else {
//       if (!this.reason) {
//         this.warning = 'Reason cannot be left blank!';
//         this.formIsClean = false;

//       } else {
//         if (this.reason) {
//           this.warning = '';
//           this.formIsClean = true;

//         }
//       }
//     }
//     this.fillFinalLeaveData();

//     this.end = this.start = new Date();
//   }

//   cancelPressed() {
//     this.finalLeaveData = [];
//     this.end = this.start = new Date();
//     this.numberofdays = this.showNumDays = 0;
//     this.selectedLeave = { label: 'Select', value: { id: 0, name: 'Select' } };
//     this.warning = '';
//     this.reason = '';
//     this.formIsClean = false;
//     this.leaveVisible = true;
//   }

//   submitPressed(event) {
//     if (this.formIsClean) {
//       localforage.setItem('appliedLeave', this.finalLeaveData, (err, value) => {
//         this.cancelPressed();
//         this.warning = 'Leave application submitted.';
//       });
//       localforage.getItem('appliedLeave').then((value) => {
//       });
//     }
//   }
// }
