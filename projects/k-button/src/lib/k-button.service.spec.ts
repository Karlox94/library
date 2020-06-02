import { TestBed } from '@angular/core/testing';

import { KButtonService } from './k-button.service';

describe('KButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KButtonService = TestBed.get(KButtonService);
    expect(service).toBeTruthy();
  });
});
