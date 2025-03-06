import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromResidenceComponent } from './from-residence.component';

describe('FromResidenceComponent', () => {
  let component: FromResidenceComponent;
  let fixture: ComponentFixture<FromResidenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FromResidenceComponent]
    });
    fixture = TestBed.createComponent(FromResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
