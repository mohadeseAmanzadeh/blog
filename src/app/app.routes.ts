import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

export const routes: Routes = [
    {path: 'logIn', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
];
