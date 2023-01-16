import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth/auth.service';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private router: Router) {
    }

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    logout() {
        this.authService.logout();

        this.router.navigateByUrl("/");
    }
}
