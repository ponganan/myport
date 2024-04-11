import { TestBed } from '@angular/core/testing';

import { Myapp1Service } from './myapp1.service';

describe('Myapp1Service', () => {
  let service: Myapp1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Myapp1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
