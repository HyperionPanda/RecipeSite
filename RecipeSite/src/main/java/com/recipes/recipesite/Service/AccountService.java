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

  //remove recipes as well?
  public Integer removeAccount(Account account){
    try{
      accountRepository.delete(account);
      return 1;
    }catch(Error e){
      return 0;
    }
  }

  public Integer getAccountId(String accountName){
    try{
      return accountRepository.findIdByUsername(accountName);
    }catch(Error e){
      return 0;
    }
  }

}
