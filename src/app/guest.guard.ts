import { CanActivateFn } from '@angular/router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const guestGuard: CanActivateFn = async (route, state) => {
  const password = localStorage.getItem('userpassword');
  const passwordFromService = 'hello';

  if (password === passwordFromService) {
    return true;
  }

  return false;
};
