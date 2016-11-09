/** Angular Dependencies */
import { OnInit } from '@angular/core';

/** Framework Dependencies */
import {BaseComponent} from '../views/base-component';

/** Module Level Dependencies */

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'employment-history',
    templateUrl: 'employment-history.component.html',
    styleUrls: ['employment-history.component.css']
})
export class EmploymentHistoryComponent {
    employmentHistory: any[];
    showDiv: boolean;

    constructor() {
        this.employmentHistory = [];
        this.showDiv = true;
    }

    onAddClick() {
        this.showDiv = false;
    }
    submit() {
        this.employmentHistory = [{
            id: 1,
            employementDetails: 'employementDetails1',
            designation: 'Developer',
            startDate: '10/11/2013',
            endDate: '10/11/2017',
            duration:'11 Months',
            status: 'pending for approval',
            comment: ''
        }];
        this.showDiv = true;
    }
    cancel() {
        this.showDiv = true;
    }
}
