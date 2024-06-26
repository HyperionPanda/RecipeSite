import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TextRecipeComponent } from './components/text-recipe/text-recipe.component';
import { ImageDragComponent } from './components/image-drag/image-drag.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,ImageDragComponent,TextRecipeComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RecipeSite';
  loggedIn : String;
  constructor(){this.loggedIn = ""}
}
