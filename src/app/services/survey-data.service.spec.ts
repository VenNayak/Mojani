import { TestBed, inject } from '@angular/core/testing';

import { SurveyDataService } from './survey-data.service';

describe('SurveyDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveyDataService]
    });
  });

  it('should be created', inject([SurveyDataService], (service: SurveyDataService) => {
    expect(service).toBeTruthy();
  }));
});
