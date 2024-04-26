import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AuthResponse } from '../../../core/models/auth/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly loginUrl = 'http://localhost:3000/login'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.loginUrl, { username, password })
      .pipe(
        map(response => {
          // Handle successful login and store tokens securely (replace with your actual implementation)
          this.setTokens(response.accessToken, response.refreshToken); // Placeholder, adapt to your API response structure
          return response;
        }),
        catchError(error => {
          // Handle login errors
          console.error('Error logging in:', error);
          return throwError(error); // Re-throw the error for handling in the component
        })
      );
  }

  // Secure token storage using cookies (consider alternative methods based on your requirements)
  setTokens(accessToken: string, refreshToken: string) {
    this.setCookie('accessToken', accessToken, { expires: 3600 }); // Expires in 1 hour
    this.setCookie('refreshToken', refreshToken, { expires: 86400 }); // Expires in 1 day
  }

  private setCookie(name: string, value: string, options: any) {
    options = options || {};
    var expires = options.expires;

    if (typeof expires === "number") {
      var d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
    }
    options.path = '/'; // Set the path for the cookie
    options.secure = true; // Ensure secure transmission
    options.sameSite = 'Lax'; // Send with same-site requests or top-level navigations

    document.cookie = name + '=' + value + '; ' + JSON.stringify(options);
  }

  getAccessToken(): string | null {
    return this.getCookie('accessToken');
  }

  getRefreshToken(): string | null {
    return this.getCookie('refreshToken');
  }

  private getCookie(name: string): string | null {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].split('=');
      const cookieName = cookie[0].trim();
      if (cookieName === name) {
        return cookie[1];
      }
    }
    return null;
  }

  clearTokens() {
    this.setCookie('accessToken', '', { expires: 0 });
    this.setCookie('refreshToken', '', { expires: 0 });
  }
}
