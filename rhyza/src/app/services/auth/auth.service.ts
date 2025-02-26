import { Injectable } from '@angular/core';
import {Auth, signInWithPopup, GoogleAuthProvider} from '@angular/fire/auth';
import {catchError, from, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  currentUser:any

   loginWithGoogle(){
    return from(signInWithPopup(this.auth, new GoogleAuthProvider())).pipe(
      catchError((error) => {
        return of(GoogleAuthProvider.credentialFromError(error))
      })
    )
  }
}
