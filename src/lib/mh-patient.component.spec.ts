import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhPatientComponent } from './mh-patient.component';

describe('MhPatientComponent', () => {
  let component: MhPatientComponent;
  let fixture: ComponentFixture<MhPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MhPatientComponent]
    });
    fixture = TestBed.createComponent(MhPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
