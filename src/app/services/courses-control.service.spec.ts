import { TestBed, inject } from '@angular/core/testing';

import { CoursesControlService } from './courses-control.service';

describe('CoursesControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesControlService]
    });
  });

  it('should be created', inject([CoursesControlService], (service: CoursesControlService) => {
    expect(service).toBeTruthy();
  }));
});
