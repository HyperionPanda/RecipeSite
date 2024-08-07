package com.recipes.recipesite.Repository;


import com.recipes.recipesite.Entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long> {
  Recipe findRecipeByName(String name);
  Recipe[] findAllRecipesByUserId(Long userId);
}
