/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserProfileService } from './user-profile.service';

describe('UserProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProfileService]
    });
  });

  it('should ...', inject([UserProfileService], (service: UserProfileService) => {
    expect(service).toBeTruthy();
  }));
});
