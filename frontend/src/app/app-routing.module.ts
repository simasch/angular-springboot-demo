import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonComponent} from './person/person.component';
import {LoginComponent} from './login/login.component';
import {LoginGuard} from './login/login.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'persons', component: PersonComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
