import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagedrag',
  standalone: true,
  imports: [],
  templateUrl: './image-drag.component.html',
  styleUrl: './image-drag.component.css'
})
export class ImageDragComponent {

  @Input() image : String;

  constructor(){this.image = ""}

}
