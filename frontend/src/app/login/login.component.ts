import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    email: string = "";
    password: string = "";
    message: string = "";

    constructor(private authService: AuthService, private router: Router) {
    }

    public login(): void {
        this.authService.login(this.email, this.password)
            .subscribe({
                next: (token) => {
                    sessionStorage.setItem("app.auth", token);
                    this.router.navigateByUrl("/persons");
                },
                error: (error) => this.message = "Login failed: " + error.status
            });
    }
}
