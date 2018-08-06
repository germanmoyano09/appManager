import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';
import { Router } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  
  constructor(
    private _router : Router
  ) { }

  login() {
    this.loggedIn.next(true);
    this._router.navigate(['/asado-manager']);
  }

  logOut() {
    this.loggedIn.next(false);
    this._router.navigate(['/login']);
  }
}