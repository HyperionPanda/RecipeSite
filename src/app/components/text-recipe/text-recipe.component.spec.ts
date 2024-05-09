import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRecipeComponent } from './text-recipe.component';

describe('TextRecipeComponent', () => {
  let component: TextRecipeComponent;
  let fixture: ComponentFixture<TextRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextRecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
