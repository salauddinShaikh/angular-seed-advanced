/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Framework Dependencies */
import {BaseComponent} from '../views/base-component';

/** Module Level Dependencies */


/** Component Declaration */
@BaseComponent({
  moduleId: module.id,
  selector: 'profile-details',
  templateUrl: 'profile-details.component.html'
})
export class ProfileDetailsComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
    //
  }
}
