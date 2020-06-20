import { TestBed } from '@angular/core/testing';

import { ChipsBalanceService } from './chips-balance.service';

describe('ChipsBalanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChipsBalanceService = TestBed.get(ChipsBalanceService);
    expect(service).toBeTruthy();
  });
});
