import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';

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

  constructor(private router: Router, private authService: AuthService) {
    this.LoginObj = new Login();
  }

  ngOnInit() { }


  setActiveForm(form: string) {
    this.activeForm = form;
  }


  onSubmitLogin() {
    this.errorMessage = ''; // Clear any previous error message

    this.authService.login(this.LoginObj)
      .subscribe(
        (response) => {
          // Login successful, navigate to protected route
          alert(response.accessToken);
          this.router.navigate(['/userinfo']); // Replace with your protected route
        },
        (error) => {
          // Login failed, handle error
          alert(error.error.message);
          this.errorMessage = 'Login failed. Please check your credentials.';
          console.log(this.errorMessage);
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