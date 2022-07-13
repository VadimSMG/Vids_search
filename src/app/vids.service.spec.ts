import { TestBed } from '@angular/core/testing';

import { VidsService } from './vids.service';

describe('VidsService', () => {
  let service: VidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
