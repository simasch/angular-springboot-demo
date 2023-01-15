import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {PersonComponent} from './person/person.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {AuthInterceptor} from './auth/auth.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        PersonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
