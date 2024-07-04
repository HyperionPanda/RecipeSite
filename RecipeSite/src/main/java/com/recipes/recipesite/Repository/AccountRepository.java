package com.recipes.recipesite.Repository;

import com.recipes.recipesite.Entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
  Account findAccountByUsernameAndPassword(String username, String password);
  Integer findIdByUsername(String username);
}
