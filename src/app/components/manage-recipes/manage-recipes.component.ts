import { Component, OnInit, ElementRef } from '@angular/core';
import { Recipe } from '../../models/Recipe';
import { HttpClient } from '@angular/common/http';
import { exampleRecipe1,exampleRecipe2,exampleRecipe3 } from '../../utils/mockData';
@Component({
  selector: 'app-manage-recipes',
  standalone: true,
  imports: [],
  templateUrl: './manage-recipes.component.html',
  styleUrl: './manage-recipes.component.css'
})
export class ManageRecipesComponent implements OnInit {

  recipes : Recipe[];
  testRecipes : Recipe[];

  constructor(private http : HttpClient, private el : ElementRef){
    this.recipes = [];
    this.testRecipes = [exampleRecipe1,exampleRecipe2,exampleRecipe3];
  }

  
  ngOnInit(): void {
      //this.getRecipes();
  }
  /*
  getRecipes(){
    const accountName = sessionStorage.getItem("account");
    const json = {
      method: "POST",
      body: JSON.stringify(accountName),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
    if(accountName != ""){
      try{
        this.http.post<Recipe[]>("http://localhost:8080/getAllRecipes",json)
          .subscribe(value => this.recipes);


      }catch(e){
        console.log("Some error occured");
        console.log("Error : "+e);
      }

    }else{
      alert("Log in to access your recipes")
    }
  }
  */
  viewRecipe(index : Number){
    const recipeButton = this.el.nativeElement.querySelector("#recipe"+index);
    let recipe;

    //call database to find recipe with specific name
    
    /*
    const json = {
      method: "POST",
      body: JSON.stringify(recipe.value),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
    if(recipeButton.value != ""){
      try{
        this.http.post<Recipe>("http://localhost:8080/findRecipe",json)
          .subscribe(value => recipe);


      }catch(e){
        console.log("Some error occured");
        console.log("Error : "+e);
      }

    }else{
      alert("Something went wrong with your saved Recipe, Please try again later")
    }
    */
  }

}
