import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private el : ElementRef, private renderer : Renderer2){}

  unHide(){
    const loginElement = this.el.nativeElement.querySelector("#loginButton");
    const logoutElement = this.el.nativeElement.querySelector("#logoutButton");
    const accountElement = this.el.nativeElement.querySelector("#accountButton");
    
    loginElement.hidden = true;
    accountElement.hidden = false;
    logoutElement.hidden = false;

  }
  hide(toShow:String, ...toHide : String[]){
    for(let i = 0; i < toHide.length; i++){
      let element = this.el.nativeElement.querySelector("#"+toHide[i]);
      
      element.hidden = true;
    }
    if(toShow){
      let element = this.el.nativeElement.querySelector("#"+toShow);
      
      element.hidden = false;
    }
  }

  verifyAccount(){
    /* back-end check */
  }

}
