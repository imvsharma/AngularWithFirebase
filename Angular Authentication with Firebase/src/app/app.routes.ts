import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
const routes : Routes = [
    // {
    //     path : '',
    //     redirectTo : '/',
    //     pathMatch : 'full'
    // }, 
    {
        path : '',
        component : HomeComponent,
        children : [
            {
                path : '',
                component : LoginComponent
            },
            {
                path : 'signup',
                component: SignupComponent
            },
        ]
    }
];

export const RouteModule = RouterModule.forRoot(routes);