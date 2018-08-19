import { TestBed, inject } from '@angular/core/testing';

import { ReadingSelectService } from './reading-select.service';

describe('ReadingSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadingSelectService]
    });
  });

  it('should be created', inject([ReadingSelectService], (service: ReadingSelectService) => {
    expect(service).toBeTruthy();
  }));
});
