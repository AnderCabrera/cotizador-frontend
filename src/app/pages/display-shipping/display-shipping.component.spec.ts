import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayShippingComponent } from './display-shipping.component';

describe('DisplayShippingComponent', () => {
  let component: DisplayShippingComponent;
  let fixture: ComponentFixture<DisplayShippingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayShippingComponent]
    });
    fixture = TestBed.createComponent(DisplayShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
