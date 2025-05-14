import { TestBed } from '@angular/core/testing';

import { CartStore } from './cart.service';

describe('CartService', () => {
  let service: CartStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
