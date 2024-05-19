import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);
  const routerService = inject(Router);

  const jwtToken = getJwtToken();
  if (jwtToken) {
    var cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return next(cloned).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          const isRefresh = confirm("Your session is Expired. Do you want to continue?");
          if (isRefresh) {
            //call refreshToken
            authService.refreshToken()?.subscribe(() => { });
            routerService.navigate(['/userinfo']);
            // call basic refresh effect 
            window.location.reload();
          }

        }
        return throwError(error)
      })
    );
  }
  return next(req);
};

function getJwtToken(): string | null {
  //let tokens: any = localStorage.getItem('JWT_TOKEN');
  let tokens: any = typeof window !== 'undefined' && localStorage.getItem('JWT_TOKEN');
  if (!tokens) return null;
  const token = JSON.parse(tokens).accessToken;
  return token;

}
