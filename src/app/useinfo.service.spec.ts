import { TestBed } from '@angular/core/testing';

import { UseInfoService } from './useinfo.service';

describe('UseinfoService', () => {
  let service: UseInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
