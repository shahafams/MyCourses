import { Component, OnInit } from '@angular/core';
import {CoursesControlService} from '../services/courses-control.service';

@Component({
  selector: 'app-app-top-bar',
  templateUrl: './app-top-bar.component.html',
  styleUrls: ['./app-top-bar.component.css']
})
export class AppTopBarComponent implements OnInit {
  counter = null;

  constructor(private coursesControlService: CoursesControlService) {
  }

  ngOnInit() {
    this.counter = this.coursesControlService.counter;
  }

}
