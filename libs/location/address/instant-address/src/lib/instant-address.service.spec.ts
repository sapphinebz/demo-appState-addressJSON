import { TestBed } from '@angular/core/testing';

import { InstantAddressService } from './instant-address.service';

describe('InstantAddressService', () => {
  let service: InstantAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstantAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
