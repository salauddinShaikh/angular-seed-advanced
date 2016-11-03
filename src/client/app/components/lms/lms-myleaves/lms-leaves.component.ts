import { BaseComponent } from '../../../frameworks/core/index';


@BaseComponent({
  moduleId: module.id,
  selector: 'leaves',
  templateUrl: 'lms-leaves.component.html'
})
export class LmsLeavesComponent {

    servRows = 5;
    leaves :any[];

    ngOnInit() {
      this.leaves = [
        {employee:'Person1 LName', startdate:'22-09-2016', enddate:'23-09-2016', numberofleaves:2, status:'Approved'},
        {employee:'Person1 LName', startdate:'22-08-2016', enddate:'22-08-2016', numberofleaves:1, status:'Approved'},
        {employee:'Person1 LName', startdate:'02-10-2016', enddate:'03-10-2016', numberofleaves:2, status:'Approved'}
      ];
    }
}
