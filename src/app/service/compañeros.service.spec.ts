import { TestBed } from '@angular/core/testing';

import { CompañerosService } from './compañeros.service';

describe('CompañerosService', () => {
  let service: CompañerosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompañerosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
