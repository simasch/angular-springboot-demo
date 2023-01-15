import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {first} from 'rxjs';

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
        this.http.post<string>("/api/auth", null,
            {headers: {Authorization: 'Basic ' + window.btoa(username + ':' + password)}})
            .pipe(first())
            .subscribe({
                next: (token) => sessionStorage.setItem("app.auth", token),
                error: (error) => alert(error.status)
            });
    }

    logout() {
        sessionStorage.removeItem("app.auth");
    }
}
