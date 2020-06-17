import { TestBed } from '@angular/core/testing';

import { AccumilatorService } from './accumilator.service';

describe('AccumilatorService', () => {
  let service: AccumilatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccumilatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
