import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth-service.service';
//import { Router } from '@angular/router'; // Import Router for navigation

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'myport-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  activeForm: string = 'login';
  //loginData = { email: '', password: '' };
  loginData = { email: '', password: '' };
  signupData = { email: '', password: '', confirmPassword: '' };

  LoginObj: Login;

  constructor(private authService: AuthService, private router: Router) {
    this.LoginObj = new Login();
  }

  ngOnInit() { }


  setActiveForm(form: string) {
    this.activeForm = form;
  }

  onSubmitLogin() {
    // Call the login method from AuthService
    this.authService.login(this.loginData.email, this.loginData.password)
      .subscribe(
        (response) => {
          // Handle successful login
          console.log('Login successful!', response); // Replace with actual success handling (e.g., navigate to dashboard)
          this.router.navigate(['/chat']); // Example navigation on successful login
        },
        (error) => {
          // Handle login errors
          console.error('Login error:', error);
          alert('Login failed! Please check your credentials.'); // Replace with user-friendly error message

        }
      );
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