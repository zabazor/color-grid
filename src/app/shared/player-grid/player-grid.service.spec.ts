import { TestBed } from '@angular/core/testing';

import { PlayerGridService } from './player-grid.service';

describe('PlayerGridService', () => {
  let service: PlayerGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
