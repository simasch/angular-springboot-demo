import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {LayoutModule} from '@angular/cdk/layout';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                AppRoutingModule,
                FormsModule,
                HttpClientModule,
                BrowserAnimationsModule,
                MatToolbarModule,
                MatMenuModule,
                MatSidenavModule,
                MatTableModule,
                MatButtonModule,
                MatInputModule,
                MatFormFieldModule,
                MatSnackBarModule,
                LayoutModule,
                MatIconModule,
                MatListModule
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
