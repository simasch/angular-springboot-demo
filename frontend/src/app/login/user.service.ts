import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {first, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {User} from './User';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    auth: string = "";

    constructor(private http: HttpClient, private router: Router) {
    }

    isLoggedIn(): boolean {
        return this.auth != "";
    }

    login(username: string, password: string): Observable<User> {
        this.auth = btoa(username + ':' + password);

        return this.http.get<User>("/api/v1/users/" + username).pipe(first());
    }

    logout() {
        this.auth = "";
    }
}
