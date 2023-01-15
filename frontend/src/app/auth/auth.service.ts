import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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
        const httpOptions = {
            headers: {
                Authorization: 'Basic ' + window.btoa(username + ':' + password)
            },
            responseType: 'text' as 'text',
        };
        return this.http.post("/api/auth", null, httpOptions);
    }

    logout() {
        sessionStorage.removeItem("app.auth");
    }
}
