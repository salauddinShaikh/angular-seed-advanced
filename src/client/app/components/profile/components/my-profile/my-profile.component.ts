/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Framework Dependencies */
import {BaseComponent} from '../views/base-component';

/** Module Level Dependencies */


/** Component Declaration */
@BaseComponent({
  moduleId: module.id,
  selector: 'my-profile',
  templateUrl: 'my-profile.component.html',
  styleUrls: ['my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
    //
  }
}
