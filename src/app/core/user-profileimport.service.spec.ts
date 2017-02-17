/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserProfileimportService } from './user-profileimport.service';

describe('UserProfileimportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProfileimportService]
    });
  });

  it('should ...', inject([UserProfileimportService], (service: UserProfileimportService) => {
    expect(service).toBeTruthy();
  }));
});
