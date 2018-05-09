import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  template: '<div class="loader"></div>',
  styleUrls: ['../styles/empty-route.component.less'],
})

export class EmptyRouteComponent {

  constructor(private router: Router) {
    this.router.navigate(['/layout/dashboard']);
  }

}
