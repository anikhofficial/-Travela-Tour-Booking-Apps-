import { TestBed } from '@angular/core/testing';

import { HomeLoginService } from './home-login.service';

describe('HomeLoginService', () => {
  let service: HomeLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
