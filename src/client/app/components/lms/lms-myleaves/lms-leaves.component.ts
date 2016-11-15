import { BaseComponent } from '../../../frameworks/core/index';
import * as localForage from "localforage";

@BaseComponent({
  moduleId: module.id,
  selector: 'leaves',
  templateUrl: 'lms-leaves.component.html'
})
export class LmsLeavesComponent {

  servRows = 5;
  leaves: any[];

  ngOnInit() {
    this.leaves = [
      { empName: 'Person1 LName', start: '22-09-2016', end: '23-09-2016', numDays: 2, status: 'Approved' },
      { empName: 'Person1 LName', start: '22-08-2016', end: '22-08-2016', numDays: 1, status: 'Approved' },
      { empName: 'Person1 LName', start: '02-10-2016', end: '03-10-2016', numDays: 2, status: 'Approved' }
    ];
  }

  constructor() {
    localForage.getItem('appliedLeave').then((value) => {
      if (value) {
        this.leaves = value;
        console.log('getting from localforage in myLeaves');
      } else {
        this.leaves = [];
      }
    });
  }
}
