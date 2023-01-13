import {Component} from '@angular/core';
import {UserService} from './login/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PersonApp';

  constructor(private userService: UserService, private router: Router) {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(["/"]);
  }
}
