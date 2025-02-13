import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroorComponent } from './erroor.component';

describe('ErroorComponent', () => {
  let component: ErroorComponent;
  let fixture: ComponentFixture<ErroorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErroorComponent]
    });
    fixture = TestBed.createComponent(ErroorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
