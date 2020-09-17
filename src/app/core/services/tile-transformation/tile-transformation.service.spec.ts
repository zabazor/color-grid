import { TestBed } from '@angular/core/testing';

import { TileTransformationService } from './tile-transformation.service';

describe('TileTransformationService', () => {
  let service: TileTransformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TileTransformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
