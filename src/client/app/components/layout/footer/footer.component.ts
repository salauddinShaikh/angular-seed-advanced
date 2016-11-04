import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'layout-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class FooterComponent implements OnInit {

  constructor(
    private router: Router) { }

}
