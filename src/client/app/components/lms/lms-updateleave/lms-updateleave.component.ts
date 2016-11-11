import { BaseComponent } from '../../../frameworks/core/index';


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
    window['localforage'].getItem('appliedLeave').then((value) => {
      if (value) {
        this.leaves = value;
        console.log('getting from localforage in myLeaves');
<<<<<<< HEAD
      } else {
=======
      }
      else {
>>>>>>> d6dbc7d16441fe03851884dbd58b0ef70418f0a1
        this.leaves = [];
      }
    });

  }
}
