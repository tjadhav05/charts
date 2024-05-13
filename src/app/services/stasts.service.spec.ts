import { TestBed } from '@angular/core/testing';

import { StastsService } from './stasts.service';

describe('StastsService', () => {
  let service: StastsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StastsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
