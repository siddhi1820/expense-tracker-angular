import { TestBed } from '@angular/core/testing';

import { AcessDeniedService } from './acess-denied.service';

describe('AcessDeniedService', () => {
  let service: AcessDeniedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcessDeniedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
