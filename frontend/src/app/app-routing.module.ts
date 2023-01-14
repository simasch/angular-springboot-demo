import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonComponent} from './person/person.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth/auth-guard.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'persons', component: PersonComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
