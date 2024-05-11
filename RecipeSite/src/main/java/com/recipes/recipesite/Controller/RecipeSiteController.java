package com.recipes.recipesite.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class RecipeSiteController {

  //@Autowired services here




  @GetMapping(value = "/test")
  public ResponseEntity<String> test(){
      return ResponseEntity.ok( "test");
  }
}
