import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user/user.service';
import {User} from '../user/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";
  password: string = "";
  message: string = "";

  constructor(private userService: UserService, private router: Router) {
  }

  public login(): void {
    this.userService.login(this.email, this.password)
      .subscribe({
        next: (user: User) => {
          this.message = "";
          this.router.navigateByUrl("/persons");
        },
        error: () => this.message = "Login failed"
      });
  }
}
