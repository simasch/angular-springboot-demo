import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonComponent} from './person.component';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

describe('PersonComponent', () => {
    let component: PersonComponent;
    let fixture: ComponentFixture<PersonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PersonComponent],
            imports: [
                HttpClientModule,
                MatTableModule
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PersonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
