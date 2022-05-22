import { TestBed } from '@angular/core/testing';

import { PunctuationService } from './punctuation.service';

describe('PunctuationService', () => {
  let service: PunctuationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunctuationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
