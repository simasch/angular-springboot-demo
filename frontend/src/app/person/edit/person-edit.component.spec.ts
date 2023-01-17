import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonEditComponent} from './person-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {AppRoutingModule} from '../../app-routing.module';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('PersonEditComponent', () => {
    let component: PersonEditComponent;
    let fixture: ComponentFixture<PersonEditComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PersonEditComponent],
            imports: [
                HttpClientModule,
                AppRoutingModule,
                MatSnackBarModule,
                FormsModule,
                MatFormFieldModule,
                MatInputModule,
                BrowserAnimationsModule
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PersonEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
