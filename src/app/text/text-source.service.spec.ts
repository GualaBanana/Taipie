import { TestBed } from '@angular/core/testing';

import { TextSourceService } from './text-source.service';

describe('TextSourceService', () => {
  let service: TextSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
