import {Component} from '@angular/core';
import {Person} from './person';
import {PersonService} from './person.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})
export class PersonComponent {
    persons: Person[] = [];
    displayedColumns: string[] = ['id', 'name'];

    constructor(private personService: PersonService) {
    }

    ngOnInit() {
        this.getPersons();
    }

    getPersons(): void {
        this.personService.getPersons().subscribe(persons => this.persons = persons);
    }
}
