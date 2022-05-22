import { TestBed } from '@angular/core/testing';

import { RandomWordsService } from './random-words.service';

describe('RandomWordsService', () => {
  let service: RandomWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
