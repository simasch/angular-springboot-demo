import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Person} from "./person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) {
  }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>("http://localhost:8080/api/v1/persons")
  }
}
