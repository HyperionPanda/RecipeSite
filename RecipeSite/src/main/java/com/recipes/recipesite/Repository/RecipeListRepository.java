package com.recipes.recipesite.Repository;

import com.recipes.recipesite.Entity.RecipeList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeListRepository extends JpaRepository<RecipeList, Long> {
}
