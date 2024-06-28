package com.recipes.recipesite.Entity;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class Recipe {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer recipeId;

  private int userId;

  private String ingredients;

  private String cookingSteps;

  @OneToMany(mappedBy = "recipe")
  private Set<RecipeList> recipes;

  public Recipe(){ this.userId = 0; this.ingredients = ""; this.cookingSteps = ""; }

  public Recipe(int userId, String ingredients, String cookingSteps) {
    this.userId = userId;
    this.ingredients = ingredients;
    this.cookingSteps = cookingSteps;
  }

  public Recipe(int userId, String ingredients) {
    this.userId = userId;
    this.ingredients = ingredients;
  }

  public int getRecipeId() {
    return recipeId;
  }

  public int getUserId() {
    return userId;
  }

  public String getIngredients() {
    return ingredients;
  }

  public String getCookingSteps() {
    return cookingSteps;
  }

  @Override
  public String toString() {
    return "Recipe [recipeId=" + recipeId + ", userId=" + userId + ", ingredients=" + ingredients+"]";
  }



}
