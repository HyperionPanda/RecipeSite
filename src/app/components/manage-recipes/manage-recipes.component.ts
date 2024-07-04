import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/Recipe';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-manage-recipes',
  standalone: true,
  imports: [],
  templateUrl: './manage-recipes.component.html',
  styleUrl: './manage-recipes.component.css'
})
export class ManageRecipesComponent implements OnInit {
  recipes : Recipe[];

  constructor(private http : HttpClient){this.recipes = []}

  ngOnInit(): void {
      this.getRecipes();
  }

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

}
