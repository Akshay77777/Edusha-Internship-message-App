import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page {

  constructor(private router: Router) { }

  redirectToHomePage() {

  this.router.navigateByUrl('/HomePage');
  }
}
