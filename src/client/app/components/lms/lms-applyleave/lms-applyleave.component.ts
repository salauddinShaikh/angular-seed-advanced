import { BaseComponent } from '../../../frameworks/core/index';
import { SelectItem } from 'primeng/primeng';


@BaseComponent({
  moduleId: module.id,
  selector: 'apply-leave',
  templateUrl: 'lms-applyleave.component.html'
})
export class LmsApplyLeavesComponent {

  leaves : SelectItem[];
  selectedLeave : string;
  numberofdays :string;
  start : Date;
  end : Date;

  constructor(){
    this.leaves = [];
    this.leaves.push({label:'Select', value:null});
    this.leaves.push({label:'Leave', value:{id:1, name: 'Leave'}});
    this.leaves.push({label:'Half Day Leave', value:{id:2, name: 'Half Day Leave'}});
    this.leaves.push({label:'Absent', value:{id:3, name: 'Absent'}});
    this.leaves.push({label:'Half Day Absent', value:{id:4, name: 'Half Day Absent'}});
  }

}
