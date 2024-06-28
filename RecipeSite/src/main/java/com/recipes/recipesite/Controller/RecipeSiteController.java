package com.recipes.recipesite.Controller;

import com.recipes.recipesite.Entity.Account;
import com.recipes.recipesite.Service.AccountService;
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

  //This works
  @GetMapping
  public String openingTest(){
    return "hello";
  }


  @GetMapping(value = "/test")
  public ResponseEntity<String> test(){
      return ResponseEntity.ok( "test");
  }


  @PostMapping(value = "newAccount")
  public ResponseEntity<Integer> addAccount(@RequestBody Account newAccount){
      Integer result = accountService.addAccount(newAccount);
      //test result if 1 or 0?
      return ResponseEntity.ok(result);
  }

  @PostMapping(value = "login")
  public ResponseEntity<Account> login(@RequestBody Account newAccount){
    Account result = accountService.login(newAccount);
    return ResponseEntity.ok(result);
  }

}
