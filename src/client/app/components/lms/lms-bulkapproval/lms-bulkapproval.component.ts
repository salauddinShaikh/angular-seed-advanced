import { BaseComponent } from '../../../frameworks/core/index';

class showLeaveReq {
  eid: number;
  employee: string;
  numberofleaves: number;
  status: string;
  start: string;
  end: string;
  approvers: string;
}

@BaseComponent({
  moduleId: module.id,
  selector: 'bulkapproval',
  templateUrl: 'lms-bulkapproval.component.html',
  styleUrls: ['lms-bulkapproval.component.css']
})
export class LmsBulkApproveComponent {

  servRows = 5;
  requests: any[];
  selectedEmployees: showLeaveReq[] = [];
  comments: string = '';
  validationMessage: string = '';

  formIsClean: boolean = false;

  ngOnInit() {
    this.requests = [
      { eid: 23123, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
      { eid: 23124, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
      { eid: 23125, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
      { eid: 23126, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
      { eid: 23127, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
      { eid: 23128, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
      { eid: 23129, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
      { eid: 23130, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
      { eid: 23131, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
      { eid: 23132, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
      { eid: 23133, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
      { eid: 23134, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
      { eid: 23135, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
    ];

    this.selectedEmployees = [];
  }

  validate() {
    if ((this.selectedEmployees.length > 0) && (this.comments.trim())) {
      this.formIsClean = true;
      this.validationMessage = '';
    } else {
      if (this.selectedEmployees.length < 0) {
        this.validationMessage = 'Nothing selected';
        this.formIsClean = false;

      } else if (!this.comments.trim()) {
        this.validationMessage = 'Comments cannot be left blank';
        this.formIsClean = false;
      }
    }
  }

  clearForm() {
    this.selectedEmployees = [];
    this.comments = '';
    this.formIsClean = true;
  }

  approvePressed() {
    this.validate();
    if (this.formIsClean) {
      this.validationMessage = 'Approved';
      this.formIsClean = true;
//    APPROVE BACKEND CALL HERE
      this.selectedEmployees = [];
      this.clearForm();
    }
  }

  rejectPressed() {
    this.validate();
    if (this.formIsClean) {
      this.validationMessage = 'Rejected';
      this.formIsClean = true;
//    REJECT BACKEND CALL HERE
      this.selectedEmployees = [];
      this.clearForm();
    }
  }
}
