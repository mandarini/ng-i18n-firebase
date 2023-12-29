import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const guestGuard: CanActivateFn = async (route, state) => {
  const firestore: Firestore = inject(Firestore);
  const passwordRef = doc(firestore, 'password', 'wedding');
  const docSnap = await getDoc(passwordRef);
  const password = localStorage.getItem('userpassword');
  let passwordFromService = '';
  if (docSnap.exists()) {
    const docData: { password: string } = docSnap.data() as {
      password: string;
    };
    passwordFromService = docData.password;
  }

  if (password === passwordFromService) {
    return true;
  }

  return false;
};
