import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FilmsService } from './films.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
   errorMessage = new BehaviorSubject<string> ('')
  constructor(

    public afAuth: AngularFireAuth, 
    public router: Router,
    private filmService: FilmsService
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
    signIn(email: string, password: string) {
      return this.afAuth
        .signInWithEmailAndPassword(email, password)
        .then((result) => {
          this.afAuth.authState.subscribe((user) => {
            console.log(user)
            if (user) {
              this.router.navigate(['']);
            }
          });
        })
        .catch((error) => {
          this.errorMessage.next(error.message)
        });
    }
    signUp(email: string, password: string) {
      return this.afAuth
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          this.afAuth.authState.subscribe((user) => {
            console.log(user)
            if (user) {
              this.router.navigate(['']);
            }
          });
          this.filmService.createFilmsList(email)
        })
        .catch((error) => {
          this.errorMessage.next(error.message)
        });
    }
    getErrorMessage() {
      return this.errorMessage.asObservable()
    }

    logout() {
      this.afAuth.signOut()
        .then(() => {
          localStorage.removeItem('user');
          this.router.navigate(['/login']);
        })
        .catch(error => {
          // Handle logout error
          console.error('Error logging out:', error);
        });
    }
}
