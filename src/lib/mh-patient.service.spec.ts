import { TestBed } from '@angular/core/testing';

import { MhPatientService } from './mh-patient.service';

describe('MhPatientService', () => {
  let service: MhPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MhPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
