import {Component, OnInit, Output} from '@angular/core';
import {CoursesControlService} from '../services/courses-control.service';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent implements OnInit {
  value = '';
  sortValue = 'default';
  constructor(private coursesControlService: CoursesControlService) {
  }

  ngOnInit() {
    this.onChange();
  }

  onChange() {
    this.sortValue = 'default';
    this.coursesControlService.mockDataAfterSearch(this.value);
  }

  cleanValue() {
    this.value = '';
    this.sortValue = 'default';
    this.onChange();
  }

  sortBy() {
    this.coursesControlService.sortBy(this.sortValue);
  }
}
