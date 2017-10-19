import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './shared/helpers/authentication.service';

const AppRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate:[AuthenticationService] }    
];

export const AppRouting = RouterModule.forRoot(AppRoutes);
