 import { TestBed } from '@angular/core/testing';

import { TentangKamiService } from './tentang-kami.service';

describe('TentangKamiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TentangKamiService = TestBed.get(TentangKamiService);
    expect(service).toBeTruthy();
  });
});