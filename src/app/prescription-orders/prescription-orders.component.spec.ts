import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionOrdersComponent } from './prescription-orders.component';

describe('PrescriptionOrdersComponent', () => {
  let component: PrescriptionOrdersComponent;
  let fixture: ComponentFixture<PrescriptionOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
