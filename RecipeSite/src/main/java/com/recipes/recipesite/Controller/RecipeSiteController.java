package com.recipes.recipesite.Controller;

import com.recipes.recipesite.Entity.Account;
import com.recipes.recipesite.Entity.Recipe;
import com.recipes.recipesite.Service.AccountService;
import com.recipes.recipesite.Service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class RecipeSiteController {

  //@Autowired services here
  @Autowired
  AccountService accountService;

  @Autowired
  RecipeService recipeService;

  //This works
  @GetMapping
  public String openingTest() {
    return "hello";
  }


  @GetMapping(value = "/test")
  public ResponseEntity<String> test() {
    return ResponseEntity.ok("test");
  }


  @PostMapping(value = "newAccount")
  public ResponseEntity<Integer> addAccount(@RequestBody Account newAccount) {
    System.out.println("1");
    Integer result = accountService.addAccount(newAccount);
    System.out.println("3");
    //test result if 1 or 0?
    return ResponseEntity.ok(result);
  }

  @PostMapping(value = "login")
  public ResponseEntity<Account> login(@RequestBody Account newAccount) {
    Account result = accountService.login(newAccount);
    return ResponseEntity.ok(result);
  }

  @PostMapping(value = "/removeAccount")
  public ResponseEntity<Integer> removeAccount(@RequestBody Account removeAccount) {
    Integer result = accountService.removeAccount(removeAccount);
    if (result == 1) {
      return ResponseEntity.ok(1);
    } else {
      return ResponseEntity.ok(0);
    }
  }

  @PostMapping(value = "/getRecipe")
  public ResponseEntity<Recipe> getRecipeByName(@RequestBody String name) {
    Recipe result = recipeService.getRecipeByName(name);
    if (result != null) {
      return ResponseEntity.ok(result);
    } else {
      return ResponseEntity.ok(null);
    }
  }

  @PostMapping(value = "/getAllRecipes")
  public ResponseEntity<Recipe[]> getAllRecipes(@RequestBody String accountName) {
    Integer userId = accountService.getAccountId(accountName);
    Recipe[] result = recipeService.getAllRecipes(userId);
    if (result != null) {
      return ResponseEntity.ok(result);
    } else {
      return ResponseEntity.ok(null);
    }
  }
}
