import { Component, ElementRef } from '@angular/core';
import { Recipe } from '../../models/Recipe';

@Component({
  selector: 'app-addRecipe',
  standalone: true,
  imports: [],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {

  constructor(private el : ElementRef){}

  async storeRecipe(){
    try{

      const recipe : Recipe = {
        recipeId: 0,
        userId : +sessionStorage.getItem("accountID")!,
        name : this.el.nativeElement.querySelector("#recipeName").value,
        ingredients : this.el.nativeElement.querySelector("#recipeIngredients").value,
        cookingSteps :this.el.nativeElement.querySelector("#recipeSteps").value
      };

      const json = {
        method: "POST",
        body: JSON.stringify(recipe),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      }
      //make call based on JSON


      
    }catch(e){
      alert(e);
    }
  }

}
