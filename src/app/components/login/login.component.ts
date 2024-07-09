import { Component, ElementRef,AfterViewInit, Renderer2 } from '@angular/core';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { Router } from '@angular/router';
import { Account } from '../../models/Account';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CreateAccountComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements AfterViewInit {

  constructor(private el : ElementRef, private router: Router, private renderer : Renderer2){}

  ngAfterViewInit(): void {
    
    const fullPage = this.el.nativeElement.ownerDocument.body;
    this.renderer.setStyle(fullPage,"backgroundColor","peachpuff");

}

  async verifyAccount(){

    const username = this.el.nativeElement.querySelector("#username").value;
    const password = this.el.nativeElement.querySelector("#password").value;
    
    const checkAccount : Account = {
      id: 0,
      username : username,
      password : password
    };

    const json = {
      method: "POST",
      body: JSON.stringify(checkAccount),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
    
    /* Call to back-end to verify username and password */
    try{
      const loginResponse : Account = await fetch("http://localhost:8080/login",json)
      .then(response => response.json())
      .then(responseJson => {return responseJson})
      .catch(error => alert(error));
      
      if(loginResponse != null){

        sessionStorage.setItem("account", username);
        sessionStorage.setItem("accountID", loginResponse.id+"");

        this.router.navigate(['/homepage'])
          .catch(console.error);

      }

    }catch(e){
      alert("Username/Password given does not match known account")
    }
  }

  createAccount(){
    this.router.navigate(['/newAccount'])
      .catch(console.error); 
  }

}
