import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private el : ElementRef){}

  verifyAccount(){

    const username = this.el.nativeElement.querySelector("#username").value;
    const password = this.el.nativeElement.querySelector("#password").value;
    
    /* Call to back-end to verify username and password */
    try{

    }catch(e){
      alert("Username/Password given does not match known account")
    }
  }

}
