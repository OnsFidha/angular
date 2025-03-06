import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsResidenceComponent } from './details-residence.component';

describe('DetailsResidenceComponent', () => {
  let component: DetailsResidenceComponent;
  let fixture: ComponentFixture<DetailsResidenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsResidenceComponent]
    });
    fixture = TestBed.createComponent(DetailsResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
