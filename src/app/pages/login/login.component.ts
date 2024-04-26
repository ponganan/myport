import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth-service.service';
//import { Router } from '@angular/router'; // Import Router for navigation
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'myport-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  username = '';
  password = '';
  loginError: string | null = null;
  isLoading = false; // Flag for loading state

  constructor(private authService: AuthService) { }

  onSubmit(loginForm: NgForm) {
    this.isLoading = true; // Set loading state to true
    this.authService.login(this.username, this.password)
      .subscribe(
        response => {
          this.isLoading = false; // Clear loading state

          // Handle successful login (replace with your actual logic)
          const accessToken = this.authService.getAccessToken();
          const refreshToken = this.authService.getRefreshToken();

          if (accessToken && refreshToken) {
            // Store tokens securely (e.g., encrypted local storage or database)
            // ... (your secure storage implementation)

            // this.router.navigate(['/chat']); // Redirect to protected area
          } else {
            console.error('Failed to retrieve tokens from login response');
          }
        },
        error => {
          this.isLoading = false; // Clear loading state

          // Handle errors (consider parsing error response for specific messages)
          this.loginError = error.message || 'Login failed. Please try again.';
        }
      );
  }
}
