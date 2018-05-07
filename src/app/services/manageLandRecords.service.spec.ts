import { TestBed, inject } from '@angular/core/testing';

import { ManageLandRecordsService } from './managelandrecords.service';

describe('ManagelandrecordsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageLandRecordsService]
    });
  });

  it('should be created', inject([ManageLandRecordsService], (service: ManageLandRecordsService) => {
    expect(service).toBeTruthy();
  }));
});
