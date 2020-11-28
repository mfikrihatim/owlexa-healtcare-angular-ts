import { TestBed } from '@angular/core/testing';

import { LayananService } from './layanan.service';

describe('LayananService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayananService = TestBed.get(LayananService);
    expect(service).toBeTruthy();
  });
});