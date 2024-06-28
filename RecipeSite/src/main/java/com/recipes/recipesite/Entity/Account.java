package com.recipes.recipesite.Entity;

import jakarta.persistence.*;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Set;

@Entity
public class Account {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private String username;

  private String password;

  @OneToMany(mappedBy = "account")
  private Set<RecipeList> accounts;

  public Account(){}

  public Account(String username, String password) {
    this.username = username;
    this.password = password;
  }

  public String getUsername(){
    return username;
  }

  public void setUsername(String newUsername){
    this.username = newUsername;
  }

  public String getPassword(){
    return password;
  }
  public void setPassword(String newPassword){
    this.password = newPassword;
  }

}
