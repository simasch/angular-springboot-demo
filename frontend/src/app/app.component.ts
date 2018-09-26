import {Component} from '@angular/core';
import {PersonService} from "./person.service";
import {Person} from "./person";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PersonApp';

  persons: Person[];

  constructor(private personSerivce: PersonService) {
  }

  ngOnInit() {
    this.getPersons();
  }

  getPersons(): void {
    this.personSerivce.getPersons()
      .subscribe(persons => this.persons = persons);
  }
}
