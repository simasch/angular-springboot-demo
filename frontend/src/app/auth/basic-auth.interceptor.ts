import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, catchError, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Basic ${sessionStorage.getItem("app.auth")}`,
        'X-Requested-With': 'XMLHttpRequest'
      },
      // Needed since we are using Session Cookies
      withCredentials: true
    });

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => this.handleErrorRes(error))
    );
  }

  private handleErrorRes(error: HttpErrorResponse): Observable<never> {
    if (error.status === 401) {
      this.router.navigateByUrl("/login", {replaceUrl: true});
    }
    return throwError(() => error);
  }
}
