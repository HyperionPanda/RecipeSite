import { Component, ElementRef } from '@angular/core';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CreateAccountComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private el : ElementRef, private router: Router){}

  verifyAccount(){

    const username = this.el.nativeElement.querySelector("#username").value;
    const password = this.el.nativeElement.querySelector("#password").value;

    
    
    /* Call to back-end to verify username and password */
    try{

    }catch(e){
      alert("Username/Password given does not match known account")
    }
  }

  createAccount(){
    this.router.navigate(['/newAccount'])
      .then(success => console.log('navigation success?' , success))
      .catch(console.error); 
  }

}
