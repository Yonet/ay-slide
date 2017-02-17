/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToastService } from './toast.service';

describe('ToastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastService]
    });
  });

  it('should ...', inject([ToastService], (service: ToastService) => {
    expect(service).toBeTruthy();
  }));
});
