import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonComponent} from './person/person.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth/auth-guard.service';
import {PersonEditComponent} from './person/edit/person-edit.component';

const routes: Routes = [
    {path: '', redirectTo: 'persons', pathMatch: 'full'},
    {path: 'persons', component: PersonComponent, canActivate: [AuthGuard], data: {role: 'ROLE_USER'}},
    {path: 'persons/:id', component: PersonEditComponent, canActivate: [AuthGuard], data: {role: 'ROLE_USER'}},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: 'persons'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
