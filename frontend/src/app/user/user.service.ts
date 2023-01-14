import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {first, Observable} from 'rxjs';
import {User} from './User';
import {Buffer} from 'buffer';
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
    sessionStorage.setItem("app.auth", Buffer.from(username + ':' + password).toString("base64"));

    return this.http.get<User>(environment.apiUrl + "/api/v1/users/" + username).pipe(first());
  }

  logout() {
    sessionStorage.removeItem("app.auth");
  }
}
