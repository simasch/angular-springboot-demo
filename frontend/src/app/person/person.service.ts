import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Person} from "./person";

@Injectable({
    providedIn: 'root',
})
export class PersonService {

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Person[]> {
        return this.http.get<Person[]>("/api/persons")
    }

    findById(id: number): Observable<Person> {
        return this.http.get<Person>(`/api/persons/${id}`)
    }

    save(person: Person): Observable<any> {
        return this.http.post("/api/persons", person);
    }
}
