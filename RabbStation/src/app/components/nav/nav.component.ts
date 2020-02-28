import {
  Component,
  OnInit
} from '@angular/core';

import {
  Router
} from '@angular/router';
import {
  AuthenticationService
} from 'src/app/_services';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }
}
