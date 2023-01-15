import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {first, Observable} from 'rxjs';
import {environment} from '../../environment/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    isLoggedIn(): boolean {
        return sessionStorage.getItem("app.auth") != null;
    }

    login(username: string, password: string): void {
        this.http.post<string>(environment.apiUrl + "/api/auth/", null,
            {headers: {Authorization: 'Basic ' + window.btoa(username + ':' + password)}})
            .pipe(first())
            .subscribe({
                next: (token) => sessionStorage.setItem("app.auth", token),
                error: (error) => alert(error)
            });
    }

    logout() {
        sessionStorage.removeItem("app.auth");
    }
}
