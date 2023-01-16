import {Component} from '@angular/core';
import {Person} from '../person/person';
import {PersonService} from '../person/person.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-person-edit',
    templateUrl: './person-edit.component.html',
    styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent {

    person: Person = new Person();

    constructor(private route: ActivatedRoute, private personService: PersonService, private snackBar: MatSnackBar, private router: Router) {
    }

    ngOnInit(): void {
        this.getPerson();
    }

    getPerson(): void {
        const idParam = this.route.snapshot.paramMap.get('id');
        if (idParam === "new") {
            this.person = new Person();
        } else {
            const id = parseInt(idParam as string, 10);
            this.personService.getPerson(id).subscribe(person => this.person = person);
        }
    }

    save(): void {
        this.personService.save(this.person).subscribe(() => {
            let snackBar = this.snackBar.open("Person saved", "OK",);
            snackBar.onAction().subscribe(value => this.router.navigateByUrl("/persons"));
        });
    }
}
