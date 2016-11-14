import { BaseComponent } from '../../../frameworks/core/index';
import * as localForage from "localforage";

@BaseComponent({
  moduleId: module.id,
  selector: 'apply-leave',
  templateUrl: 'lms-updateleave.component.html'
})
export class LmsUpdateLeavesComponent {

  leaves: any[] = [];
  managers: any[];

  ngOnInit() {
    this.leaves = [
      { leave: { id: 0, name: 'Select' }, numDays: 1, reason: 'Personal', start: '22-09-2016', end: '22-09-2016', action: '' },
      { leave: { id: 0, name: 'Select' }, numDays: 1, reason: 'Personal', start: '23-09-2016', end: '23-09-2016', action: '' },
    ];

    this.managers = [
      { project: 'HR', manager: 'Pooja Merchant', status: 'Approved', comments: 'Approved' },
      { project: 'RMS', manager: 'Sagar Shelar', status: 'Approved', comments: 'Approved' },
    ];
  }

  constructor() {
    localforage.getItem('appliedLeave').then((value) => {
      if (value) {
        this.leaves = value;
        console.log('getting from localforage in myLeaves');
      } else {
        this.leaves = [];
      }
    });

  }
}
