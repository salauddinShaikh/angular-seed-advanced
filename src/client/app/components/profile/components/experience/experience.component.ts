/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Framework Dependencies */
import { BaseComponent } from '../views/base-component';

/** Module Level Dependencies */
import { Experience } from '../../entity/experience';

/** Component Declaration */
@BaseComponent({
  moduleId: module.id,
  selector: 'experience',
  templateUrl: 'experience.component.html',
  styleUrls: ['experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience: Experience[];
  showDiv: boolean;

  constructor(
    private router: Router) {
    this.showDiv = true;
  }

  ngOnInit(): void {
    this.experience = [];
  }

  onAddClick() {
    this.showDiv = false;
  }
  submit() {
    this.experience = [{
      id: 1,
      project: 'ssc',
      client: 'ssc',
      startDate: '12-12-2012',
      endDate: '12-12-2020',
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
