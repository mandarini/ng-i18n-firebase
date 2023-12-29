import { Injectable } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  password: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {}

  fetchOurPassword(): string {
    return 'hello';
  }

  login(password: string) {
    if (password === this.password) {
      localStorage.setItem('userpassword', password);
      this.router.navigate(['wedding'], { relativeTo: this.route });
    }
  }

  userIsLoggedIn(): boolean {
    const localPassword = localStorage.getItem('userpassword');
    return this.fetchOurPassword() === localPassword;
  }
}
