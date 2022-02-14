import { TestBed } from '@angular/core/testing';

import { UserProfileRequestService } from './user-profile-request.service';

describe('UserProfileRequestService', () => {
  let service: UserProfileRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProfileRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
