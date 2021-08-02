import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplpInputComponent } from './multiplp-input.component';

describe('MultiplpInputComponent', () => {
  let component: MultiplpInputComponent;
  let fixture: ComponentFixture<MultiplpInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplpInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplpInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
