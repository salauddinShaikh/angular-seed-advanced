import { BaseComponent } from '../../../frameworks/core/index';

@BaseComponent({
  moduleId: module.id,
  selector: 'bulkapproval',
  templateUrl: 'lms-bulkapproval.component.html'
})
export class LmsBulkApproveComponent {

    servRows = 5;
    requests :any[];
    selectedEmployees :any[];

    ngOnInit(){
      this.requests = [
          {eid:23123, employee:"Employee", numberofleaves:4, status:"Approved", start:"01-10-2016", end:"10-10-2016", approvers:"Manager, Manager, Manager, Manager", pending: ""},
          {eid:23124, employee:"Employee", numberofleaves:4, status:"Approved", start:"01-10-2016", end:"10-10-2016", approvers:"Manager, Manager, Manager, Manager", pending: ""},
          {eid:23125, employee:"Employee", numberofleaves:4, status:"Approved", start:"01-10-2016", end:"10-10-2016", approvers:"Manager, Manager, Manager, Manager", pending: ""},
          {eid:23126, employee:"Employee", numberofleaves:4, status:"Approved", start:"01-10-2016", end:"10-10-2016", approvers:"Manager, Manager, Manager, Manager", pending: ""},
          {eid:23127, employee:"Employee", numberofleaves:4, status:"Approved", start:"01-10-2016", end:"10-10-2016", approvers:"Manager, Manager, Manager, Manager", pending: ""},
          {eid:23128, employee:"Employee", numberofleaves:4, status:"Approved", start:"01-10-2016", end:"10-10-2016", approvers:"Manager, Manager, Manager, Manager", pending: ""},
          {eid:23129, employee:"Employee", numberofleaves:4, status:"Approved", start:"01-10-2016", end:"10-10-2016", approvers:"Manager, Manager, Manager, Manager", pending: ""},
          {eid:23130, employee:"Employee", numberofleaves:4, status:"Approved", start:"01-10-2016", end:"10-10-2016", approvers:"Manager, Manager, Manager, Manager", pending: ""},
          {eid:23131, employee:"Employee", numberofleaves:4, status:"Approved", start:"01-10-2016", end:"10-10-2016", approvers:"Manager, Manager, Manager, Manager", pending: ""},
          {eid:23132, employee:"Employee", numberofleaves:4, status:"Approved", start:"01-10-2016", end:"10-10-2016", approvers:"Manager, Manager, Manager, Manager", pending: ""},
          {eid:23133, employee:"Employee", numberofleaves:4, status:"Approved", start:"01-10-2016", end:"10-10-2016", approvers:"Manager, Manager, Manager, Manager", pending: ""},
          {eid:23134, employee:"Employee", numberofleaves:4, status:"Approved", start:"01-10-2016", end:"10-10-2016", approvers:"Manager, Manager, Manager, Manager", pending: ""},
          {eid:23135, employee:"Employee", numberofleaves:4, status:"Approved", start:"01-10-2016", end:"10-10-2016", approvers:"Manager, Manager, Manager, Manager", pending: ""},
      ];
    }


}
