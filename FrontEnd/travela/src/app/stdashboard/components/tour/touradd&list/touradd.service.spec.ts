import { TestBed } from '@angular/core/testing';

import { TouraddService } from './touradd.service';

describe('TouraddService', () => {
  let service: TouraddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TouraddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
