import { HttpClient } from '@angular/common/http';
//import { Token } from '@angular/compiler';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private loggedUser?: string;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  //public $refreshToken = new Subject<boolean>;

  private router = inject(Router);

  private http = inject(HttpClient);

  constructor() { }

  login(user: { email: string, password: string }): Observable<any> {
    return this.http.post('http://localhost:3000/login', user).pipe(
      tap((tokens: any) => this.doLoginUser(user.email, JSON.stringify(tokens)))
    )
  }

  private doLoginUser(email: string, token: any) {
    this.loggedUser = email;
    this.storeJwtToken(token);
    this.isAuthenticatedSubject.next(true);
  }

  // private storeJwtToken(jwt: string) {
  //   localStorage.setItem(this.JWT_TOKEN, jwt);
  // }

  storeJwtToken(jwt: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.JWT_TOKEN, jwt);
    }
  }

  logout() {
    localStorage.removeItem(this.JWT_TOKEN);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  getCurrentAuthUser() {
    return this.http.get('http://localhost:3000/api/userinfo');
  }

  // isLoggedIn() {
  //   return localStorage.getItem(this.JWT_TOKEN);
  // }

  isLoggedIn() {
    return typeof window !== 'undefined' && localStorage.getItem(this.JWT_TOKEN);
  }

  isTokenExpired() {
    const tokens = typeof window !== 'undefined' && localStorage.getItem(this.JWT_TOKEN);
    if (!tokens) return true;

    const token = JSON.parse(tokens).accessToken;

    //have to install 
    // npm install jwt-decode
    const decoded = jwtDecode(token);
    if (!decoded.exp) return true;
    const expirationDate = decoded.exp * 1000;
    const now = new Date().getTime();

    return expirationDate < now;
  }

  refreshToken() {
    let tokens: any = typeof window !== 'undefined' && localStorage.getItem(this.JWT_TOKEN);
    if (!tokens) return;
    tokens = JSON.parse(tokens);
    let refreshToken = tokens.refreshToken;

    return this.http.post<any>('http://localhost:3000/auth/refresh-token', {
      refreshToken,
    })
      .pipe(tap((tokens: any) => this.storeJwtToken(JSON.stringify(tokens))));
  }
}
