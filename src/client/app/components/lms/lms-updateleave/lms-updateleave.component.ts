import { BaseComponent } from '../../../frameworks/core/index';


@BaseComponent({
  moduleId: module.id,
  selector: 'apply-leave',
  templateUrl: 'lms-updateleave.component.html'
})
export class LmsUpdateLeavesComponent {

  leaves : any[];
  managers :any[];

  ngOnInit(){
    this.leaves = [
      { type:"Leave", numberofleaves:1, reason:"Personal", start:"22-09-2016", end:"22-09-2016", action:""},
      { type:"Leave", numberofleaves:1, reason:"Personal", start:"23-09-2016", end:"23-09-2016", action:""},
      ];

      this.managers =[
        {project:"HR", manager:"Pooja Merchant", status:"Approved", comments:"Approved"},
        {project:"RMS", manager:"Sagar Shelar", status:"Approved", comments:"Approved"},
      ];
  }

}
