import { Injectable, inject } from '@angular/core';
import {
  DocumentData,
  DocumentReference,
  Firestore,
  doc,
  getDoc,
} from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private firestore: Firestore = inject(Firestore);
  passwordRef: DocumentReference<DocumentData, DocumentData>;
  password: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.passwordRef = doc(this.firestore, 'password', 'wedding');
  }

  async fetchOurPassword(): Promise<string | undefined> {
    const docSnap = await getDoc(this.passwordRef);
    if (docSnap.exists()) {
      const docData: { password: string } = docSnap.data() as {
        password: string;
      };
      this.password = docData.password;
      return docData.password;
    }
    return undefined;
  }

  login(password: string) {
    if (password === this.password) {
      localStorage.setItem('userpassword', password);
      this.router.navigate(['wedding'], { relativeTo: this.route });
    }
  }

  userIsLoggedIn(): Observable<boolean> {
    const localPassword = localStorage.getItem('userpassword');
    return from(this.fetchOurPassword()).pipe(
      map((firestorePassword) => firestorePassword === localPassword)
    );
  }
}
