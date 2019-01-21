import { TestBed, inject } from '@angular/core/testing';

import { ChargenService } from './chargen.service';

describe('ChargenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChargenService]
    });
  });

  it('should be created', inject([ChargenService], (service: ChargenService) => {
    expect(service).toBeTruthy();
  }));
});
