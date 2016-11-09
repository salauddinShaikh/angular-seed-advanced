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
  selector: 'education',
  templateUrl: 'education.component.html',
   styleUrls: ['education.component.css'] 
})
export class EducationComponent implements OnInit {    
    education: any[];
    class: SelectItem[];
    grade: SelectItem[];
    showDiv: boolean ;

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
      this.showDiv = false;
    this.class = [];
    this.class.push({ label: 'Select Class', value: null });
    this.class.push({ label: 'SSC', value: { id: 1, name: 'SSC' } });
    this.class.push({ label: 'HSC', value: { id: 2, name: 'HSC' } });
    this.class.push({ label: 'Diploma', value: { id: 3, name: 'Diploma' } });
    this.class.push({ label: 'Graduation', value: { id: 4, name: 'Graduation' } });
    this.class.push({ label: 'Post-Graduation', value: { id: 5, name: 'Post-Graduation' } });

    this.grade = [];
    this.grade.push({ label: 'Select Grade', value: null });
    this.grade.push({ label: 'Distinction', value: { id: 1, name: 'Distinction' } });
    this.grade.push({ label: 'First Class', value: { id: 2, name: 'First Class' } });
    this.grade.push({ label: 'Second Class', value: { id: 3, name: 'Second Class' } });
    this.grade.push({ label: 'Pass', value: { id: 4, name: 'Pass' } }); 
  }

  onAddClick(){
     this.showDiv = true;
  }

  cancel() {
      this.showDiv = false;
  }  
}