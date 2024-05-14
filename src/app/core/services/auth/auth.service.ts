import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private loggedUser?: string;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  private http = inject(HttpClient);

  constructor() { }

  login(user: { email: string, password: string }): Observable<any> {
    return this.http.post('http://localhost:3000/login', user).pipe(
      tap((tokens: any) => this.doLoginUser(user.email, tokens.accessToken))
    )
  }

  private doLoginUser(email: string, token: any) {
    this.loggedUser = email;
    this.storeJwtToken(token);
    this.isAuthenticatedSubject.next(true);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  logout() {
    localStorage.removeItem(this.JWT_TOKEN);
    this.isAuthenticatedSubject.next(false);
  }

  getCurrentAuthUser() {
    let token = localStorage.getItem(this.JWT_TOKEN);
    return this.http.get('http://localhost:3000/api/userinfo',
      //  {
      //   headers: {
      //     Authorization: 'Bearer ' + token,
      //   }
      // }
    );
  }
}
