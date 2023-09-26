import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireauth: AngularFireAuth, private route: Router) {}

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('token', 'true');
        this.route.navigate(['buses']);
      },
      (err) => {
        alert('something went wrong');
        this.route.navigate(['/login']);
      }
    );
  }

  signup(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert('registration successful');
        this.route.navigate(['/login']);
      },
      (err) => {
        alert('not registered');
        this.route.navigate(['/signup']);
      }
    );
  }
}
