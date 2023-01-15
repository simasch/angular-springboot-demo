import {Component} from '@angular/core';
import {Person} from './person';
import {PersonService} from './person.service';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})
export class PersonComponent {
    persons: Person[] = [];

    constructor(private personService: PersonService) {
    }

    ngOnInit() {
        this.getPersons();
    }

    getPersons(): void {
        this.personService.getPersons().subscribe(persons => this.persons = persons);
    }
}
