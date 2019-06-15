import {Component, OnInit, Output} from '@angular/core';
import {CoursesControlService} from '../services/courses-control.service';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent implements OnInit {
  value = '';

  constructor(private coursesControlService: CoursesControlService) {
  }

  ngOnInit() {
    this.onChange();
  }

  onChange() {
    this.coursesControlService.mockDataAfterSearch(this.value);
  }

  cleanValue() {
    this.value = '';
    this.onChange();
  }
}
