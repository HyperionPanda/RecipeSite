package com.recipes.recipesite.Controller;

import com.recipes.recipesite.Entity.Account;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class RecipeSiteController {

  //@Autowired services here




  @GetMapping(value = "/test")
  public ResponseEntity<String> test(){
      return ResponseEntity.ok( "test");
  }


  @PostMapping(value = "newAccount")
  public ResponseEntity<Account> addAccount(@RequestBody Account newAccount){
      return ResponseEntity.ok(newAccount);
  }

}
