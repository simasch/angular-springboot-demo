import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {first, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    isLoggedIn(): boolean {
        return sessionStorage.getItem("app.auth") != null;
    }

    login(username: string, password: string): Observable<string> {
        return this.http.post<string>("/api/auth", null,
            {headers: {Authorization: 'Basic ' + window.btoa(username + ':' + password)}})
            .pipe(first());
    }

    logout() {
        sessionStorage.removeItem("app.auth");
    }
}
