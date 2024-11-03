import { TestBed } from '@angular/core/testing';

import { CatTextService } from './cat-text.service';

describe('CatTextService', () => {
  let service: CatTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
