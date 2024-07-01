package com.recipes.recipesite.Service;

import com.recipes.recipesite.Entity.Recipe;
import com.recipes.recipesite.Repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecipeService {

  @Autowired
  private RecipeRepository recipeRepository;


  //changing to long might make the id unrecognizable
  public Recipe getRecipe(int id) {
    Long recipeId = Integer.toUnsignedLong(id);
    return recipeRepository.getReferenceById(recipeId);
  }

  public Recipe getRecipeByName(String name) {
    return recipeRepository.findRecipeByName(name);
  }

}
