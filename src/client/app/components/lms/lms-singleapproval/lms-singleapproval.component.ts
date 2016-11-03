import { BaseComponent } from '../../../frameworks/core/index';


@BaseComponent({
  moduleId: module.id,
  selector: 'singleapproval',
  templateUrl: 'lms-singleapproval.component.html'
})
export class LmsSingleApprovalComponent {

  requests :any[];
  servRows = 6;

  ngOnInit() {
    this.requests = [
      {project:'RMS', manager:'Sagar Shelar', status: 'Pending', comments:'Comment1 here...'},
      {project:'PLSV 2', manager:'Manager Name', status: 'Approved', comments:'Comment2 here...'},
    ];
  }
}
