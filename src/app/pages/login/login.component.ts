import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
//import { response } from 'express';
@Component({
  selector: 'myport-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  activeForm: string = 'login';
  signupData = { email: '', password: '', confirmPassword: '' };
  errorMessage: string = '';

  LoginObj: Login;

  constructor(private http: HttpClient, private router: Router) {
    this.LoginObj = new Login();
  }

  ngOnInit() { }


  setActiveForm(form: string) {
    this.activeForm = form;
  }

  // onSubmitLogin() {
  //   this.http.post<any>('http://localhost:3000/login', this.LoginObj)
  //     .subscribe({
  //       next: (response) => {
  //         // Handle successful login (replace with your logic)       

  //         alert(response.message);
  //         this.router.navigate(['/chat']);

  //       },

  //       error: (error) => {
  //         if (error.error) {
  //           this.errorMessage = error.error.message; // Access the error message from the server
  //           alert(this.errorMessage);
  //         } else {
  //           this.errorMessage = 'Login failed!'; // Generic message if no specific error is provided
  //           alert(this.errorMessage);
  //         }

  //       }
  //     });
  // }

  onSubmitLogin(): void {
    this.login(this.LoginObj.email, this.LoginObj.password).subscribe({
      next: (response) => {
        // Handle successful login (replace with your logic)
        alert(response.message);
        this.router.navigate(['/chat']);
      },
      error: (error) => {
        this.errorMessage = error.error.message;
        alert(this.errorMessage);
      }
    })
  }

  private login(username: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:3000/login', { username, password })
      .pipe(
        map(response => response), // Assuming no data transformation needed
        catchError(error => this.handleError(error))
      );
  }

  private handleError(error: any): Observable<any> {
    console.error('Error logging in:', error);
    return throwError(error); // Re-throw the error for handling in the component
  }



  onSubmitSignup() {
    // Implement your signup logic here using the signupData object
    console.log('Signup form submitted:', this.signupData);
  }
}

export class Login {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}