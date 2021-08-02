import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBase64ComponentComponent } from './photo-base64-component.component';

describe('PhotoBase64ComponentComponent', () => {
  let component: PhotoBase64ComponentComponent;
  let fixture: ComponentFixture<PhotoBase64ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoBase64ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoBase64ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
