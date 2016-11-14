import { BaseComponent } from '../../../frameworks/core/index';


@BaseComponent({
  moduleId: module.id,
  selector: 'singleapproval',
  templateUrl: 'lms-singleapproval.component.html',
  styleUrls: ['lms-singleapproval.component.css']
})
export class LmsSingleApprovalComponent {

  requests :any[];
  servRows = 6;

  comments: string = '';
  validationMessage: string = '';
  formIsClean: boolean = false;

  ngOnInit() {
    this.requests = [
      {project:'RMS', manager:'Sagar Shelar', status: 'Pending', comments:'Comment1 here...'},
      {project:'PLSV 2', manager:'Manager Name', status: 'Approved', comments:'Comment2 here...'},
    ];
  }

  validate() {
    if ((this.comments.trim())) {
      this.formIsClean = true;
      this.validationMessage = '';
    } else {
      if (!this.comments.trim()) {
          this.validationMessage = 'Comments cannot be left blank';
          this.formIsClean = false;
      }
    }
  }

  clearForm() {
    this.comments = '';
    this.formIsClean = true;
  }

  approvePressed() {
    this.validate();
    if (this.formIsClean) {
      this.validationMessage = 'Approved';
      this.formIsClean = true;
//    APPROVE BACKEND CALL HERE
      this.clearForm();
    }
  }

  rejectPressed(event) {
    this.validate();
    if (this.formIsClean) {
      this.validationMessage = 'Rejected';
      this.formIsClean = true;
//    REJECT BACKEND CALL HERE
      this.clearForm();
    }
  }
}
