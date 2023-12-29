import { Injectable } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  loggedIn = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  login() {
    this.loggedIn = true;
    this.router.navigate(['main'], { relativeTo: this.route });
  }

  userIsLoggedIn(): boolean {
    return this.loggedIn;
  }
}
