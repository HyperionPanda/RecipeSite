package com.recipes.recipesite.Service;

import com.recipes.recipesite.Entity.Account;
import com.recipes.recipesite.Repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {
  @Autowired
  private AccountRepository accountRepository;

  //use @Transactional ?
  public Integer addAccount(Account account) {
    if (account != null){
      Account test = accountRepository.save(account);
      if (test != null) {
        return 1;
      }
    }
    return 0;
  }
  public Account login(Account checkAccount) {
    Account account = accountRepository.findAccountByUsernameAndPassword(checkAccount.getUsername(), checkAccount.getPassword());
    return account;
  }
}
