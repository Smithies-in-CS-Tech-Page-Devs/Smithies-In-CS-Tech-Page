import { TestBed } from '@angular/core/testing';

import { CreditCalcService } from './credit-calc.service';

describe('CreditCalcService', () => {
  let service: CreditCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
