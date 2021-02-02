import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionOrderDetailComponent } from './prescription-order-detail.component';

describe('PrescriptionOrderDetailComponent', () => {
  let component: PrescriptionOrderDetailComponent;
  let fixture: ComponentFixture<PrescriptionOrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionOrderDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
