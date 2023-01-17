import {TestBed} from '@angular/core/testing';

import {PersonService} from './person.service';
import {HttpClientModule} from '@angular/common/http';

describe('PersonService', () => {
    let service: PersonService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ]
        });
        service = TestBed.inject(PersonService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
