import { TestBed } from '@angular/core/testing';

import { UseinfoService } from './useinfo.service';

describe('UseinfoService', () => {
  let service: UseinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
