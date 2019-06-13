import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesControlService {
  counter = 0;
  constructor() { }

  private addCourse() {
    this.counter += 1;
  }
}
