/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExceptionService } from './exception.service';

describe('ExceptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExceptionService]
    });
  });

  it('should ...', inject([ExceptionService], (service: ExceptionService) => {
    expect(service).toBeTruthy();
  }));
});
