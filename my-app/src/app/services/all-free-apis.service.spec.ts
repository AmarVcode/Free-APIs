import { TestBed } from '@angular/core/testing';

import { AllFreeApisService } from './all-free-apis.service';

describe('AllFreeApisService', () => {
  let service: AllFreeApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllFreeApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
