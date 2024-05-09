import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDragComponent } from './image-drag.component';

describe('ImageDragComponent', () => {
  let component: ImageDragComponent;
  let fixture: ComponentFixture<ImageDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageDragComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
