import {
  Injectable
} from '@angular/core';
import {
  Router,
  CanActivate
} from '@angular/router';
import {
  routeUrl
} from '../../app.config';
import {
  DataService
} from './data.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private dataService: DataService) {}

  canActivate() {
    const url = window.location.hash.split('/');
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page
    this.router.navigate([routeUrl.login]);
    if (url.length > 3) {
      setTimeout(() => {
        this.dataService.updateNotifyBedData(url);
      }, 1000);
    }
    return false;
  }
}
