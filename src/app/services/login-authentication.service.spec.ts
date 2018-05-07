import { TestBed, inject } from '@angular/core/testing';

import { LoginAuthenticationService } from './login-authentication.service';

describe('LoginAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginAuthenticationService]
    });
  });

  it('should be created', inject([LoginAuthenticationService], (service: LoginAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
