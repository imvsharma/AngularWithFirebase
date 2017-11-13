import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

const routes : Routes = [
    {
        path : '',
        redirectTo : '/',
        pathMatch : 'full'
    }, 
    {
        path : '',
        component : LoginComponent
    },
    {
        path : 'signup',
        component: SignupComponent
    },
    {
        path : 'profile',
        component: ProfileComponent
    }
];

export const RouteModule = RouterModule.forRoot(routes);