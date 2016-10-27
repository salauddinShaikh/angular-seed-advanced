import { BaseComponent } from '../../../frameworks/core/index';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@BaseComponent({
  moduleId: module.id,
  selector: 'my-timesheet',
  templateUrl: 'my-timesheet.component.html'
})
export class MyTimesheetComponent implements OnInit {
  employee: Employee[];

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
    this.employee = [{
      id: 1,
      employee: '',
      approverUser: 'Abc',
      startDate: '20-11-2018',
      endDate: '25-11-2018',
      billableHours: 10,
      nonBillableHours: 2,
      status: 'Submitted',
      pendingApprover: ''
    },
      {
        id: 2,
        employee: '',
        approverUser: 'xyz',
        startDate: '25-11-2018',
        endDate: '28-11-2018',
        billableHours: 20,
        nonBillableHours: 12,
        status: 'Not-Submitted',
        pendingApprover: ''
      }, {
        id: 3,
        employee: '',
        approverUser: 'DEF',
        startDate: '02-12-2018',
        endDate: '12-12-2018',
        billableHours: 30,
        nonBillableHours: 12,
        status: 'Approved',
        pendingApprover: ''
      }, {
        id: 4,
        employee: '',
        approverUser: 'PQR',
        startDate: '03-10-2017',
        endDate: '25-10-2017',
        billableHours: 20,
        nonBillableHours: 2,
        status: 'Submitted',
        pendingApprover: ''
      }, {
        id: 5,
        employee: '',
        approverUser: 'stu',
        startDate: '15-11-2017',
        endDate: '25-11-2017',
        billableHours: 17,
        nonBillableHours: 5,
        status: 'Not-Submitted',
        pendingApprover: ''
      }, {
        id: 6,
        employee: '',
        approverUser: 'wyz',
        startDate: '17-10-2018',
        endDate: '20-10-2018',
        billableHours: 18,
        nonBillableHours: 12,
        status: 'Submitted',
        pendingApprover: ''
      }
    ];
  }

  selectEmployee(employee: Employee) {
    this.router.navigate(['/add-edit-timesheet']);
  }

}
