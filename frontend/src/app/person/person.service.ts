import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Person} from "./person";
import {environment} from '../../environment/environment';

@Injectable({
    providedIn: 'root',
})
export class PersonService {

    constructor(private http: HttpClient) {
    }

    getPersons(): Observable<Person[]> {
        return this.http.get<Person[]>(environment.apiUrl + "/api/v1/persons")
    }
}
