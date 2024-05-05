import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth-service.service';
//import { Router } from '@angular/router'; // Import Router for navigation
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'myport-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  activeForm: string = 'login';
  loginData = { email: '', password: '' };
  signupData = { email: '', password: '', confirmPassword: '' };

  constructor() { }

  ngOnInit() { }

  setActiveForm(form: string) {
    this.activeForm = form;
  }

  onSubmitLogin() {
    // Implement your login logic here using the loginData object
    console.log('Login form submitted:', this.loginData);
  }

  onSubmitSignup() {
    // Implement your signup logic here using the signupData object
    console.log('Signup form submitted:', this.signupData);
  }
}