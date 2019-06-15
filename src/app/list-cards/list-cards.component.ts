import {Component, OnInit} from '@angular/core';
import {CoursesControlService} from '../services/courses-control.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {
  mockData: object;

  constructor(private coursesControlService: CoursesControlService) {
  }

  ngOnInit() {
    this.coursesControlService.search.subscribe(data => this.mockData = data);
  }
}
