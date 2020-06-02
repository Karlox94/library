import { TestBed } from '@angular/core/testing';

import { CasbButtonService } from './casb-button.service';

describe('CasbButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CasbButtonService = TestBed.get(CasbButtonService);
    expect(service).toBeTruthy();
  });
});
