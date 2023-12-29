import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const guestGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthenticationService);
  return authService.userIsLoggedIn();
};
