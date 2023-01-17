import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import jwtDecode, {JwtPayload} from 'jwt-decode';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    username: string = "";
    password: string = "";
    message: string = "";

    constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {
    }

    public login(): void {
        sessionStorage.removeItem("app.token");

        this.authService.login(this.username, this.password)
            .subscribe({
                next: (token) => {
                    sessionStorage.setItem("app.token", token);

                    const decodedToken = jwtDecode<JwtPayload>(token);
                    // @ts-ignore
                    sessionStorage.setItem("app.roles",  decodedToken.scope);

                    this.router.navigateByUrl("/persons");
                },
                error: (error) => this.snackBar.open(`Login failed: ${error.status}`, "OK")
            });
    }
}
