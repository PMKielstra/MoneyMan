import { TestBed } from '@angular/core/testing';

import { SurveyProcessAndStorageService } from './survey-process-and-storage.service';

describe('SurveyProcessAndStorageService', () => {
  let service: SurveyProcessAndStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyProcessAndStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
