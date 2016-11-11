/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Framework Dependencies */
import {BaseComponent} from '../views/base-component';

/** Module Level Dependencies */


/** Component Declaration */
@BaseComponent({
  moduleId: module.id,
  selector: 'personal-info',
  templateUrl: 'personal-info.component.html',
   styleUrls: ['personal-info.component.css'] 
})
export class PersonalInfoComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
    //
  }
}
