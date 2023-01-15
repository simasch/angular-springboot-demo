import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, catchError, throwError} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request.url.endsWith("api/auth")) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${sessionStorage.getItem("app.auth")}`
                },
            });
        }

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
