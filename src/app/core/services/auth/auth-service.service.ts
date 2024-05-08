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
        map(response => response), // Assuming response doesn't contain access/refresh tokens
        catchError(error => this.handleError(error)) // Handle errors
      );
  }

  private handleError(error: any): Observable<any> {
    console.error('Error logging in:', error);
    return throwError(error); // Re-throw the error for handling in the component
  }

  isLoggedIn(): boolean {
    // Check for the presence of the access token cookie (HttpOnly)
    return document.cookie.indexOf('accessToken=') !== -1;
  }

  // Removed setTokens() and setCookie() as they are not used with HttpOnly cookies
}