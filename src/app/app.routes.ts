import { Routes } from '@angular/router';
import { HomePage } from '../pages/home/home.component';
import { AboutPage } from '../pages/about/about';
import { AdminPage } from '../pages/admin/admin';
import { LoginPage } from '../pages/login/login';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    { 
        path: 'about',
        component: AboutPage
    },
    {
        path: 'admin',
        component: AdminPage
    },
    {
        path: 'login',
        component: LoginPage
    }
];
