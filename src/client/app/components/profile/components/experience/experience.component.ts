/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Framework Dependencies */
import {BaseComponent} from '../views/base-component';

/** Third Party Dependencies */
import {SelectItem} from 'primeng/primeng';

/** Module Level Dependencies */


/** Component Declaration */
@BaseComponent({
  moduleId: module.id,
  selector: 'experience',
  templateUrl: 'experience.component.html',
  styleUrls: ['experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience: any[];
  showDiv: boolean;

  constructor(
    private router: Router) {
    this.experience = [];
    this.showDiv = true;
  }

  ngOnInit(): void {

  }

  onAddClick() {
    this.showDiv = false;
  }
  submit() {
    this.experience = [{
      id: 1,
      project: 'ssc',
      client: 'ssc',
      startDate: 'distiction',
      endDate: '90',
      role: '2000',
      environment: '',
      responsibilites: 'status',
      description: 'hr Comment'
    }];
    this.showDiv = true;
  }
  cancel() {
    this.showDiv = true;
  }
}
