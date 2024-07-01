import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { ViewRecipesComponent } from './components/view-recipes/view-recipes.component';
import { ManageRecipesComponent } from './components/manage-recipes/manage-recipes.component';
export const routes: Routes = [
    
    {path:'login', component:LoginComponent},
    {path:'newAccount', component:CreateAccountComponent},
    {path:'homepage', component:HomePageComponent},
    {path:'addRecipe', component:AddRecipeComponent},
    {path:'viewRecipes', component:ViewRecipesComponent},
    {path:'manageRecipes', component:ManageRecipesComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'}




];
