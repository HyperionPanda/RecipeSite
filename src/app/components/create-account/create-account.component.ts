import { Component, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../../models/Account';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent implements AfterViewInit {

  constructor(private renderer : Renderer2,private element : ElementRef, private http : HttpClient){}

  ngAfterViewInit(): void {
    
      const fullPage = this.element.nativeElement.ownerDocument.body;
      this.renderer.setStyle(fullPage,"backgroundColor","grey");

  }

  validateFields(){

    const username = this.element.nativeElement.querySelector("#username");
    const password = this.element.nativeElement.querySelector("#password");
    const otherpassword = this.element.nativeElement.querySelector("#otherpassword");

    if(username.value.length < 5){
      alert("Username must be longer than 5 letters");
      return;
    }else if (username.value.length > 15){
      alert("Username must be shorter than 15 letters");
      return;
    }

    if(password.value.length < 5){
      alert("Password must be longer than 5 letters");
      return;
    }else if (password.value.length > 15){
      alert("Password must be shorter than 15 letters");
      return;
    }else if(password.value != otherpassword.value){
      alert("The passwords in each field must be the same");
      return;
    }

    this.makeAccount(username.value,password.value);
  }
  async makeAccount(user : String, pass : String){

    const checkAccount : Account = {
      id: 0,
      username : user,
      password : pass
    };

    const json = {
      method: "POST",
      body: JSON.stringify(checkAccount),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }

    try{

      const response = await fetch("http://localhost:8080/newAccount",json);
      
      if(response.status == 200){
        alert("Account created successfully");
      }
    }catch(e){
      alert("something went wrong with making your account, please try again")
    }

    //this.http.post("someurl",someaccount);

  }

}
