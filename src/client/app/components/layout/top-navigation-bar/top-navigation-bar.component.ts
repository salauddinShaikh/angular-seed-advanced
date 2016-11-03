import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../shared/services/login.service';

@Component({
  moduleId: module.id,
  selector: 'top-navigation-bar',
  templateUrl: 'top-navigation-bar.component.html',
  styleUrls: ['top-navigation-bar.component.css'],
})
export class TopNavigationBarComponent implements OnInit {

  constructor(private loginService: LoginService,private _router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.logout();
    this._router.navigate(['/login']);
  }
}
