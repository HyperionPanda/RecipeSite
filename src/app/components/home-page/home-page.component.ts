import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private router: Router){}

  public redirect(type: String){
    switch(type){
      case ("add"):
        this.router.navigate(['/addRecipe'])
          .catch(console.error);
        return;
      case ("manage"):
        this.router.navigate(['/manageRecipes'])
          .catch(console.error);
        return;
      case("view"):
      this.router.navigate(['/viewRecipes'])
      .catch(console.error);
        return;
      default:
        console.log("issue");
        return;
    }
  }

}
