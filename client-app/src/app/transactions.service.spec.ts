import { TestBed } from '@angular/core/testing';

import { TransactionsService } from './transactions.service';

describe('EvaluatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionsService = TestBed.get(TransactionsService);
    expect(service).toBeTruthy();
  });
});
