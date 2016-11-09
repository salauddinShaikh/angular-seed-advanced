/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Framework Dependencies */
import { BaseComponent } from '../views/base-component';

/** Third Party Dependencies */
import { SelectItem } from 'primeng/primeng';

/** Module Level Dependencies */


/** Component Declaration */
@BaseComponent({
  moduleId: module.id,
  selector: 'skillSet',
  templateUrl: 'skill-set.component.html',
  styleUrls: ['skill-set.component.css']
})
export class SkillSetComponent implements OnInit {
  skillSet: any[];
  skillTypes: SelectItem[];
  showDiv: boolean;

  constructor(
    private router: Router) {
    this.skillSet = [];
    this.skillTypes = [];
    this.showDiv = true;
  }

  ngOnInit(): void {
    this.skillTypes.push({ label: 'Select Skill Type', value: null });
    this.skillTypes.push({ label: 'Language/Technology', value: { id: 1, name: 'Language/Technology' } });
    this.skillTypes.push({ label: 'Database', value: { id: 2, name: 'Database' } });
  }

  onAddClick() {
    this.showDiv = false;
  }
  submit() {
    this.skillSet = [{
      id: 1,
      skillType: 'Language / Technology',
      skills: 'C#',
      status: 'status',
      comments: 'hr Comment',
      approvers: 'Lead'
    }];
    this.showDiv = true;
  }
  cancel() {
    this.showDiv = true;
  }
}
