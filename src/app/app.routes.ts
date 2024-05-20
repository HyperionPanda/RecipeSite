import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';

export const routes: Routes = [
    
    {path:'login', component:LoginComponent},
    {path:'newAccount', component:CreateAccountComponent}, 
    {path: '', redirectTo: '/login', pathMatch: 'full'}




];
