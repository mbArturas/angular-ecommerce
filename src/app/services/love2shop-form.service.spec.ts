import { TestBed } from '@angular/core/testing';

import { Love2shopFormService } from './love2shop-form.service';

describe('Love2shopFormService', () => {
  let service: Love2shopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Love2shopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
