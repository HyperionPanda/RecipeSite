package com.recipes.recipesite.Entity;
import jakarta.persistence.*;

@Entity
public class RecipeList {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int recipeListId;

  @ManyToOne
  @JoinColumn(name = "account_id")
  Account account;

  @ManyToOne
  @JoinColumn(name = "recipe_id")
  Recipe recipe;

  public RecipeList() {}

  public RecipeList(Account account, Recipe recipe ){
    this.account = account;
    this.recipe = recipe;
  }

  public Account getAccountId() {
    return account;
  }
  public void setAccountId(Account account) {
    this.account = account;
  }

  public Recipe getRecipe() {
    return recipe;
  }
  public void setRecipe(Recipe recipe) {
    this.recipe = recipe;
  }

  @Override
  public String toString() {
    return "Recipe List [recipeListId = " + recipeListId + ", account_id = " + account + ", recipe_id = " + recipe+"]";
  }
}
