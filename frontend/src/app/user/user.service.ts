import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {first, Observable} from 'rxjs';
import {User} from './User';
import {environment} from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem("app.auth") != "";
  }

  login(username: string, password: string): Observable<User> {
    sessionStorage.setItem("app.auth", window.btoa(username + ':' + password));

    return this.http.get<User>(environment.apiUrl + "/api/v1/users/" + username).pipe(first());
  }

  logout() {
    sessionStorage.removeItem("app.auth");
  }
}
