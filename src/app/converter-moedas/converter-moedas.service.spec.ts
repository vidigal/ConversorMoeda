import { TestBed } from '@angular/core/testing';

import { ConverterMoedasService } from './converter-moedas.service';

describe('ConverterMoedasService', () => {
  let service: ConverterMoedasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConverterMoedasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
